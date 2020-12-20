import { defaults } from 'lodash-es'
import Browser from 'webextension-polyfill'

export enum StartupPage {
  All = 'all',
  ChatGPT = 'chatgpt',
  Bing = 'bing',
}

export enum BingConversationStyle {
  Creative = 'creative',
  Balanced = 'balanced',
  Precise = 'precise',
}

const userConfigWithDefaultValue = {
  openaiApiKey: '',
  openaiApiHost: 'https://api.openai.com',
  chatgptApiTemperature: 0.6,