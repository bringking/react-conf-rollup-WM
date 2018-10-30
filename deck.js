// deck.js
export { default as theme } from './theme'
import intro from './intro.mdx'
import hooks from './hooks.mdx'
import suspense from './suspense.mdx'
import profiler from './profiler.mdx'

export default [
  ...intro,
  ...hooks,
  ...suspense,
  ...profiler
]
