export type RequestInitSubset = {
  method?: string
  body?: string
  headers?: Record<string, string>
  signal?: AbortSignal
}

export interface ProxyFetchRequestMessage {
  url: string
  options?: RequestInitSubset
}

export interface ProxyFetchResponseMetadata {
  status?: number
  statusText?: string
  headers?: Record<string, stri