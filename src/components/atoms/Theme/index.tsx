import React, { FunctionComponent } from 'react'

import { ThemeProvider } from 'styled-components/native'

import theme from '../../../theme'

const Theme: FunctionComponent = ({ children }) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
}

export default Theme
