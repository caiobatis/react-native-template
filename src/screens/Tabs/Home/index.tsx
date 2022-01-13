import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { Flex } from 'atoms'
import { useBottomSheetContext } from 'contexts/BottomSheet'
import { TabStackScreen } from 'organisms/TabStackNavigator'

const Home: TabStackScreen<'Home'> = () => {
  const bottomSheetContext = useBottomSheetContext(({ close }) => (
    <Flex marginTop={84}>
      <Text>Home</Text>
    </Flex>
  ))

  return (
    <WrapSafeAreaView>
      <Flex marginTop={84}>
        <Text onPress={() => bottomSheetContext.open()}>Home</Text>
      </Flex>
    </WrapSafeAreaView>
  )
}

const WrapSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`

export default Home
