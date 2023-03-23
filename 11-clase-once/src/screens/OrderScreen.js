import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ORDERS } from '../data/orders'
import OrderItems from '../components/OrderItems'

const OrderScreen = () => {

    const onDelete = (id) => {
        console.log('delete', id)
    }

    const renderItem = ({ item }) => <OrderItems item={item} onDelete={onDelete}/>

  return (
    <FlatList
    style={styles.screen}
        data={ORDERS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
     />
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    screen: {
        marginTop: 40,
        flex: 1,
    }
})