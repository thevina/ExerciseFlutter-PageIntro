import Browser from 'webextension-polyfill'

export async function getTokenUsage() {
  const { tokenUsage } = await Browser.storage.sync.get('tokenUsage')
  return tokenUsage || 0
}

export 