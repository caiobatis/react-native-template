import { FunctionComponent } from 'react'

import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import { Home, Search } from 'screens'

import { RootStackScreen } from '../RootStackNavigator'

type TabStackParamList = {
  Home: undefined
  Search: undefined
}

export type TabStackScreen<RouteName extends keyof TabStackParamList> = FunctionComponent<
  BottomTabScreenProps<TabStackParamList, RouteName>
>

const Tab = createBottomTabNavigator<TabStackParamList>()

const tabs = [
  {
    component: Home,
    name: 'Home'
  },
  {
    component: Search,
    name: 'Search'
  }
]

const TabStackNavigator: RootStackScreen<'Tabs'> = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      {tabs.map(({ component, name }) => (
        <Tab.Screen {...{ component }} key={name} name={name as keyof TabStackParamList} />
      ))}
    </Tab.Navigator>
  )
}

export default TabStackNavigator
