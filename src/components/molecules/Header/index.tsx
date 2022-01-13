import { FunctionComponent, memo, PropsWithChildren, ReactNode } from 'react'

import styled from 'styled-components/native'

import { Flex, Space, Text } from 'atoms'
import { BackButton } from 'molecules'

type Props = PropsWithChildren<{
  right?: ReactNode
  title: string
  withoutBackButton?: boolean
}>

const Header: FunctionComponent<Props> = ({
  children,
  right,
  title,
  withoutBackButton = false
}) => (
  <Container>
    <Flex alignItems="center" flexDirection="row">
      {!withoutBackButton && (
        <>
          <BackButton />
          <Space horizontal offset={12} />
        </>
      )}
      <Text type="lg">{title}</Text>
      {!!right && (
        <>
          <Space horizontal />
          {right}
        </>
      )}
    </Flex>
    {children}
  </Container>
)

export const Container = styled(Flex).attrs({
  paddingBottom: 21,
  paddingHorizontal: 16,
  paddingTop: 24
})`
  border-bottom-color: #000;
  border-bottom-width: 1px;
`

export default memo(Header)
