import { RAFHandler } from './handlers'

export const resize = {
  type: 'resize',
  target: window,
  debounce: 200
}

export const scroll = {
  type: 'scroll',
  target: window
}

export const raf = {
  alias: 'raf',
  handler: RAFHandler
}

export default [
  'resize',
  'scroll',
  'raf'
]
