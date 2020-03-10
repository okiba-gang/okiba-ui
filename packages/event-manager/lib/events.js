import { RAFHandler } from './handlers'

export const resize = {
  type: 'resize',
  target: window,
  debounce: 200,
  payloadFilter: e => ({
    width: window.innerWidth,
    height: window.innerHeight,
    event: e
  })
}

export const scroll = {
  type: 'scroll',
  target: window
}

export const raf = {
  alias: 'raf',
  handler: RAFHandler
}
