import { memo } from 'react'

import styled, { css } from 'styled-components/native'

type Props = {
  offset?: number
  horizontal?: boolean
}

const Space = styled.View<Props>`
  ${({ horizontal = false, offset, theme }) =>
    offset
      ? css`
          height: ${horizontal ? '100%' : `${theme.responsive.heightPixel(offset)}px`};
          width: ${horizontal ? `${theme.responsive.widthPixel(offset)}px` : '100%'};
        `
      : css`
          flex: 1;
        `}
`

export default memo(Space)
