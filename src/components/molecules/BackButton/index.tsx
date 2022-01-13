import { FunctionComponent, memo } from 'react'

import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

import { Text } from 'atoms'

type Props = {
  color?: string
  onPress?(): void
}

const BackButton: FunctionComponent<Props> = ({ color, onPress }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      hitSlop={{ bottom: 8, left: 8, right: 8, top: 8 }}
      onPress={onPress || navigation.goBack}
    >
      <Text type="sm">back</Text>
    </TouchableOpacity>
  )
}

export default memo(BackButton)
