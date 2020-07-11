import { getUserConfig } from '~services/user-config'
import { ChatError, ErrorCode } from '~utils/errors'
import { parseSSEResponse } from '~utils/sse'
import { AbstractBot, SendMessageParams } from '../abstract-bot'
import { CHATGPT_SYSTEM_MESSAGE, ChatMessage } from './consts'
import { updateTokenUsage } from './usage'

interface ConversationContext {
  messages: ChatMessage[]
}

export class ChatGPTApiBot extends AbstractBot {
  private conversationContext?: ConversationContext

  async doSendMessage(params: SendMessageParams) {
    const { openaiApiKey, openaiApiHost } = await getUserConfig()
    if (!openaiApiKey) {
      throw new ChatError('OpenAI API key not set', ErrorCode.API_KEY_NOT_SET)
    }
    if (!this.conversationContext) {
      this.conversationContext = {
        messages: [{ role: 'system', content: CHATGPT_SYSTEM_MESSAGE }],
      }
    }
    this.conversationContext.messages.push({ role: 'user', content: params.prompt })

    const resp = await f