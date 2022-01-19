import { render } from '@testing-library/react-native'
import { Text } from 'react-native'

import { AppWrapper, Flex } from 'atoms'

describe('Flex', () => {
  it('renders correctly', () => {
    render(
      <Flex>
        <Text>Something</Text>
      </Flex>,
      { wrapper: AppWrapper }
    )
  })
})
