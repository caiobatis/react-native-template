import 'react-native-reanimated'

import { FunctionComponent } from 'react'
import { View } from 'react-native'

import { enableFreeze } from 'react-native-screens'

import AppWrapper from './AppWrapper'

enableFreeze(true)

const App: FunctionComponent = () => (
  <View>App</View>
)

export default App
