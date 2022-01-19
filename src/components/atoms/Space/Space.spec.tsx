import { render } from '@testing-library/react-native'

import { AppWrapper, Space } from 'atoms'

describe('Space', () => {
  it('renders correctly', () => {
    render(<Space />, { wrapper: AppWrapper })
  })
})
