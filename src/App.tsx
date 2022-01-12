import 'react-native-reanimated'

import { FunctionComponent } from 'react'

import { enableFreeze } from 'react-native-screens'

import { AppWrapper } from 'atoms'
import { RootStackNavigator } from 'organisms'

enableFreeze(true)

const App: FunctionComponent = () => (
  <AppWrapper>
    <RootStackNavigator />
  </AppWrapper>
)

export default App
