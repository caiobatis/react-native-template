import 'react-native-reanimated'

import { FunctionComponent } from 'react'

import { enableFreeze } from 'react-native-screens'

import { RootStackNavigator } from 'organisms'

import AppWrapper from './AppWrapper'

enableFreeze(true)

const App: FunctionComponent = () => (
  <AppWrapper>
    <RootStackNavigator />
  </AppWrapper>
)

export default App
