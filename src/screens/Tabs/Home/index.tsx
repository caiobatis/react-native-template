import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { Flex } from 'atoms'
import { useBottomSheetContext } from 'contexts/BottomSheet'
import { Header } from 'molecules'
import { TabStackScreen } from 'organisms/TabStackNavigator'

const Home: TabStackScreen<'Home'> = () => {
  const bottomSheetContext = useBottomSheetContext(({ close }) => (
    <Flex style={{ height: 300 }}>
      <Text onPress={close}>Close</Text>
    </Flex>
  ))

  return (
    <WrapSafeAreaView>
      <Header title="Home" />
      <Flex>
        <Text onPress={() => bottomSheetContext.open()}>Open BottomSheet</Text>
      </Flex>
    </WrapSafeAreaView>
  )
}

const WrapSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`

export default Home
