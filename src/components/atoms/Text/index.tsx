import { memo } from 'react'

import { TextStyle } from 'react-native'
import styled, { css, DefaultTheme } from 'styled-components/native'

type Props = Pick<TextStyle, 'color' | 'textAlign' | 'textTransform' | 'textDecorationLine'> &
  (
    | {
        fontFamily?: never
        fontSize?: never
        fontWeight?: never
        lineHeight?: never
        type: keyof DefaultTheme['typography']['types']
      }
    | (Required<Pick<TextStyle, 'fontSize' | 'lineHeight'>> &
        Pick<TextStyle, 'fontWeight'> & {
          fontFamily?: keyof DefaultTheme['fonts']
          type?: never
        })
  )

const Text = styled.Text<Props>`
  ${({
    color,
    fontFamily = 'primary',
    fontSize,
    fontWeight = 'normal',
    lineHeight,
    textAlign = 'left',
    textTransform = 'none',
    textDecorationLine = 'none',
    theme,
    type
  }) => css`
    color: ${(color || theme.colors.primary.base) as string};
    text-align: ${textAlign};
    text-transform: ${textTransform};
    text-decoration: ${textDecorationLine};
    ${type
      ? css`
          font-family: ${theme.fonts[theme.typography.types[type].fontFamily]};
          font-size: ${theme.responsive.fontPixel(theme.typography.types[type].fontSize)}px;
          font-weight: ${theme.typography.types[type].fontWeight};
          line-height: ${theme.responsive.fontPixel(theme.typography.types[type].lineHeight)}px;
        `
      : css`
          font-family: ${theme.fonts[fontFamily]};
          font-size: ${theme.responsive.fontPixel(fontSize as number)}px;
          font-weight: ${fontWeight};
          line-height: ${theme.responsive.fontPixel(lineHeight as number)}px;
        `}
  `}
`

export default memo(Text)
