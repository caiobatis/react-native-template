import 'react-native-reanimated'

import { FunctionComponent } from 'react'

import { Text } from 'react-native'
import { enableFreeze } from 'react-native-screens'

import AppWrapper from './AppWrapper'

enableFreeze(true)

const App: FunctionComponent = () => (
  <AppWrapper>
    <Text>App</Text>
  </AppWrapper>
)

export default App
