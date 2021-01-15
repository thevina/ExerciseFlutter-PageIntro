export async function* streamAsyncIterable(stream: ReadableStream) {
  const reader = stream.getReader()
