import { FunctionComponent } from 'react'

import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import { useTheme } from 'styled-components/native'

export type Props = Pick<ViewProps, 'style'> &
  Pick<ViewStyle, 'alignItems' | 'flexDirection' | 'flexWrap' | 'justifyContent'> & {
    flex?: boolean
    margin?: number
    marginBottom?: number
    marginHorizontal?: number
    marginLeft?: number
    marginRight?: number
    marginTop?: number
    marginVertical?: number
    padding?: number
    paddingBottom?: number
    paddingHorizontal?: number
    paddingLeft?: number
    paddingRight?: number
    paddingTop?: number
    paddingVertical?: number
  }

const Flex: FunctionComponent<Props> = ({ children, flex = false, style, ...props }) => {
  const theme = useTheme()

  const horizontal = [
    'marginHorizontal',
    'marginLeft',
    'marginRight',
    'paddingHorizontal',
    'paddingLeft',
    'paddingRight'
  ]

  const vertical = [
    'margin',
    'marginBottom',
    'marginTop',
    'marginVertical',
    'padding',
    'paddingBottom',
    'paddingTop',
    'paddingVertical'
  ]

  const _props: any = props

  const horizontalProps = horizontal.map((e: string) => ({
    [e]: _props[e] ? theme.responsive.pixelSizeHorizontal(_props[e]) : {}
  }))

  const verticalProps = vertical.map((e: string) => ({
    [e]: _props[e] ? theme.responsive.pixelSizeVertical(_props[e]) : {}
  }))

  return (
    <View
      style={StyleSheet.compose(
        {
          ...(flex ? { flex: 1 } : {}),
          ...horizontalProps,
          ...verticalProps,
          ...props
        },
        style
      )}
    >
      {children}
    </View>
  )
}

export default Flex
