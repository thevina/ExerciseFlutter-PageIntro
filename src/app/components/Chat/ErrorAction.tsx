import { Link } from '@tanstack/react-router'
import { FC, useCallback, useContext, useState } from 'react'
import { chatGPTClient } from '~app/bots/chatgpt-webapp/client'
import { ConversationContext } from '~app/context'
import { ChatError, ErrorCode } from '~utils/errors'
import Button from '../Button'
import MessageBubble from './MessageBubble'

const ChatGPTAuthErrorAction = () => {
  const [fixing, setFixing] = useState(false)
  const [fixed, setFixed] = useState(false)

  const fixChatGPT = useCallback(async () => {
    setFixing(true)
    try {
      await chatGPTClient.fixAuthState()
    } catch (e) {
      console.error(e)
      return
    } finally {
      setFixing(false)
    }
    setFixed(true)
  }, [])

  if (fixed) {
    return <MessageBubble color="flat">Fixed, please retry chat</MessageBubble>
  }
  return (
    <div className="flex flex-row gap-2 items-center">
      <Button color="primary" text="Login & verify" onClick={fixChatGPT} isLoading={fixing} size="small" />
      <span className="text-sm">OR</span>
      <Link to="/setting">
        <Button color="primary" text="Set api key" size="small" />
      </Link>
    </div>
  )
}

const ErrorAction: FC<{ error: ChatError }> = ({ error }) => {
  const conversation = useContext(ConversationContext)

  if (error.code === ErrorCode.BING_UNAUTHORIZED) {
    return (
      <a href="https://bing.com" target="_blank" rel="noreferrer">
        <Button color="primary" text="Login at bin