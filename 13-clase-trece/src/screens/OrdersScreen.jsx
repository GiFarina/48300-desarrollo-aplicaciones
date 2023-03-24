import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ORDERS } from '../data/orders'
import OrderItem from '../components/OrderItem'
import { getOrders, deleteOrder } from '../store/actions/orders.action'

const OrdersScreen = () => {

  const dispatch = useDispatch()
  const orders = useSelector(state=>state.orders.list)

  React.useEffect(()=>{
    dispatch(getOrders())
  },[])

    const onHandleDeleteOrder = (id)=>{
        console.log('delete order')
        dispatch(deleteOrder(id))
    }

    const renderOrdersItem = ({item}) =>(
        <OrderItem
            item={item}
            onDelete={onHandleDeleteOrder}
        />
    )

  return (
    <View style={styles.container}>
      <FlatList 
        data={orders}
        renderItem={renderOrdersItem}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 36
  }
})