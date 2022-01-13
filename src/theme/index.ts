import { DefaultTheme } from 'styled-components'

import { responsive } from '../utils'

const Theme: DefaultTheme = {
  responsive,
  fonts: {
    primary: 'DM Sans',
    secondary: 'DM Sans'
  },
  typography: {
    types: {
      xl: {
        fontFamily: 'primary',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28
      },
      lg: {
        fontFamily: 'primary',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28
      },
      md: {
        fontFamily: 'primary',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28
      },
      sm: {
        fontFamily: 'primary',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28
      },
      xs: {
        fontFamily: 'primary',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28
      }
    }
  },
  colors: {
    primary: {
      dark: '#000',
      base: '#333',
      light: '#ccc'
    },
    secondary: {
      dark: '#000',
      base: '#333',
      light: '#ccc'
    }
  }
}

export default Theme
