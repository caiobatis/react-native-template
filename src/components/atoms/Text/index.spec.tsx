import { render } from '@testing-library/react-native'

import { AppWrapper, Text } from 'atoms'

describe('Text', () => {
  it('renders correctly Predefined Type', () => {
    render(<Text type="h1">Predefined Type</Text>, { wrapper: AppWrapper })
  })

  it('renders correctly Custom', () => {
    render(
      <Text fontFamily="secondary" fontSize={24} fontWeight="bold" lineHeight={30}>
        Custom
      </Text>,
      { wrapper: AppWrapper }
    )
  })
})
