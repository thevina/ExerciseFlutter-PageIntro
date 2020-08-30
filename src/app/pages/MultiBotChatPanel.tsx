import { FC, useCallback, useMemo } from 'react'
import Button from '~app/components/Button'
import ChatMessageInput from '~app/components/Chat/ChatMessageInput'
import { useChat } from '~app/hooks/use-chat'
import { BotId } from '../bots'
import ConversationPanel from '../components/Chat/ConversationPanel'

const MultiBotChatPane