import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { productsList } from '../data/productsList'

const ProductsScreen = () => {
    return (<>

        <ScrollView style= {{paddingLeft: '3%', paddingRight:'3%'}}>
            {
                productsList.map((item, index) => {
                    return <Card key={item.id}>
                        <Card.Cover source={{ uri: item.image }} />
                        <Card.Title titleStyle={{ fontSize: 25 }} title={item.name} subtitle={item.unitPrice} />
                    

                </Card>
                })
            }
        </ScrollView>

    </>
    )
}

export default ProductsScreen