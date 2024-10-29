import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../AppNavigation/AppNavigator'
import { useRoute } from '@react-navigation/native'

interface ChatProps{
    navigation:StackNavigationProp<RootStackParamList,'Chats'>
}
const Chat = ({navigation}:ChatProps) => {
    const route=useRoute()
    console.log(route)
  return (
    <View>
      <Text>Chat</Text>
    </View>
  )
}

export default Chat