import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { RootStackScreen } from 'organisms/RootStackNavigator'

const Onboarding: RootStackScreen<'Onboarding'> = () => {
  return (
    <WrapSafeAreaView>
      <Text>Onboarding</Text>
    </WrapSafeAreaView>
  )
}

const WrapSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`

export default Onboarding
