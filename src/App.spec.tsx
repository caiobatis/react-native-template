import TestRenderer from 'react-test-renderer'

import App from './App'

describe('App', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(<App />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
