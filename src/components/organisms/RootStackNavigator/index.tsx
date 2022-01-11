import { FunctionComponent } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'

import { TabStackNavigator } from 'organisms'
import { Onboarding } from 'screens'

export type RootStackParamList = {
  Tabs: undefined
  Onboarding: undefined
}

export type RootStackScreen<RouteName extends keyof RootStackParamList> = FunctionComponent<
  NativeStackScreenProps<RootStackParamList, RouteName>
>

const Root = createNativeStackNavigator<RootStackParamList>()

const RootStackNavigator: FunctionComponent = () => {
  const initialRouteName = 'Onboarding'

  return (
    <NavigationContainer>
      <Root.Navigator
        {...{ initialRouteName }}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      >
        <Root.Screen component={Onboarding} name="Onboarding" />
        <Root.Screen component={TabStackNavigator} name="Tabs" />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default RootStackNavigator
