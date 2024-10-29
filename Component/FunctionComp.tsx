import { View, Text } from 'react-native'
import React from 'react'
interface MyProps{
    name:string
}
const FunctionComp = ({name}:MyProps) => {
   
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default FunctionComp