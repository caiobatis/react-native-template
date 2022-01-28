import Renderer from 'react-test-renderer'

import App from './App'

describe('App', () => {
  it('renders correctly', () => {
    const component = Renderer.create(<App />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
