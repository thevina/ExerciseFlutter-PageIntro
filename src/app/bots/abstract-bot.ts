import { ChatError, ErrorCode } from '~utils/errors'

export type Event =
  | {
      type: 'UPDATE_ANSWER'
      data: {
        text: string
      }
    }
  | {
      type: 'DONE'
    }
  | {
      type: 'ERROR'
      error: ChatError
    }

export inte