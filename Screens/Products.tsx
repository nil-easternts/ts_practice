import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

const Products = () => {
    interface ProductState {
        price: number
    }
    const [products, setProducts] = useState<ProductState[]>([])
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    return (
        <View>
            <FlatList data={products}
                renderItem={({ item, index }: { item: ProductState, index: number }) => {
                    return (
                       <ProductItem item={item}/>
                    )
                }}
            />
        </View>
    )
}

export default Products

