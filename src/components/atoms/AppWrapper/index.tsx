import { FunctionComponent } from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const AppWrapper: FunctionComponent = ({ children }) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </GestureHandlerRootView>
)

export default AppWrapper
