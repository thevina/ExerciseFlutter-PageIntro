import Browser from 'webextension-polyfill'
import {
  ProxyFetchRequestMessage,
  ProxyFetchResponseBodyChunkMessage,
  ProxyFetchResponseMetadataMessage,
  RequestInitSubset,
} from '~types/messaging'
import { uuid } from '~utils'
import { string2Uint8Array, uint8Array2String } from '~utils/encoding'
import { streamAsyncIterable } from '~utils/stream-async-iterable'

export function setupProxyExecutor() {
  // one port for one fetch request
  Browser.runtime.onConnect.addListener((port) => {
    const abortController = new AbortController()
    port.onDisconnect.addListener(() => {
      abortController.abort()
    })
    port.onMessage.addListener(async (message: ProxyFetchRequestMessage) => {
      console.debug('proxy fetch', message.url, message.options)
      const resp = await fetch(message.url, {
        ...message.options,
        signal: abortController.signal,
      })
      port.postMessage({
        type: 'PROXY_RESPONSE_METADATA',
        metadata: {
          status: resp.status,
          statusText: resp.statusText,
          headers: Object.fromEntries(resp.headers.entries()),
        },
      } as ProxyFetchResponseMetadataMessage)