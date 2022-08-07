import 'styled-components'

import darkTheme from './dark'

const theme = lightTheme

console.log('type', theme)

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
