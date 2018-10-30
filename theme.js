// Example theme.js
import { dark } from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...dark,
  // custom colors
  colors: {
    ...dark.colors, // include existing theme colors
    text: '#00CDBE',
    background: 'black',
    link: '#005F5C',
  }
}
