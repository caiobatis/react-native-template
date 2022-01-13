import { TextStyle } from 'react-native'
import 'styled-components'

import { responsive } from 'utils'

declare module 'styled-components' {
  export interface DefaultTheme {
    responsive: typeof responsive
    fonts: {
      primary: string
      secondary: string
    }
    colors: Record<
      'primary' | 'secondary',
      {
        dark: string
        base: string
        light: string
      }
    >
    typography: {
      types: Record<
        'xl' | 'lg' | 'md' | 'sm' | 'xs',
        {
          fontFamily: keyof DefaultTheme['fonts']
          fontSize: number
          fontWeight: TextStyle['fontWeight']
          lineHeight: number
        }
      >
    }
  }
}
