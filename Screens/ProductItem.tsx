import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface DataProp{
    item:{
        price:number
    }
   
}

const ProductItem = ({item}:DataProp) => {
  return (
    <View>
      <Text>{item.price}</Text>
    </View>
  )
}

export default ProductItem

