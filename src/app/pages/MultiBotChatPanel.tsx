import { FC, useCallback, useMemo } from 'react'
import Button from '~app/components/Button'
import ChatMessageInput from '~app/components/Chat/ChatMessageInput'
import { useChat } from '~app/hooks/use-chat'
import { BotId } from '../bots'
import ConversationPanel from '../components/Chat/ConversationPanel'

const MultiBotChatPanel: FC = () => {
  const chatgptChat = useChat('chatgpt')
  const bingChat = useChat('bing')

  const generating = useMemo(
    () => chatgptChat.generating || bingChat.generating,
    [bingChat.generating, chatgptChat.generating],
  )

  const onUserSendMessage = useCallback(
    (input: string, botId?: BotId) => {
      if (botId === 'chatgpt') {
        chatgptChat.sendMessage(input)
      } else if (botId === 'bing') {
        bingChat.sendMessage(input)
      } else {
        chatgptChat.sendMessage(input)
        bingChat.sendMessage(input)
      }
    },
    [bingChat, chatgptChat],
  )

  return (
    <div className="grid grid-cols-2 grid-rows-[1fr_auto] overflow