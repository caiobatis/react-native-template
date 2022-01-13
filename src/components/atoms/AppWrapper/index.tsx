import { FunctionComponent } from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Theme } from 'atoms'
import { BottomSheetProvider } from 'contexts/BottomSheet'

const AppWrapper: FunctionComponent = ({ children }) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <Theme>
        <BottomSheetProvider>{children}</BottomSheetProvider>
      </Theme>
    </SafeAreaProvider>
  </GestureHandlerRootView>
)

export default AppWrapper
