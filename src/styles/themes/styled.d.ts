import 'styled-components'

import darkTheme from './dark'

const theme = darkTheme

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
