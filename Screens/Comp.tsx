import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../Component/StyleContext'

const Comp:React.FC = () => {
    const value=useContext(MyContext)
  return (
    <View style={{backgroundColor:value.bg}}>
      <Text style={{color:value.color}}>Comp</Text>
    </View>
  )
}

export default Comp