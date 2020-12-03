import Browser from 'webextension-polyfill'
import { setupProxyExecutor } from '~services/proxy-fetch'

async function main() {
  if ((window as any).__NEXT_DATA__) {
    await Browser.runtime.sendMessage({ event: 'PROXY_TAB_READY' })
    alert('Please keep this tab open, now you can go back to ChatHub')
  }
}

setupProxyExecutor()
main().catch(console.error)
