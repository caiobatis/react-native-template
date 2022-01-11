import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { TabStackScreen } from 'organisms/TabStackNavigator'

const Search: TabStackScreen<'Search'> = () => {
  return (
    <WrapSafeAreaView>
      <Text>Search</Text>
    </WrapSafeAreaView>
  )
}

const WrapSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`

export default Search
