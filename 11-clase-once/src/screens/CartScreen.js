import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'
import { CART } from '../data/cart'

const CartScreen = () => {

  const onDelete = (item) => {
    console.log('delete', item)
  }
  const onConfirm = () => {
    console.log('confirm')
  }
  const renderItems = ({ item }) => <CartItem item={item} onDelete={onDelete} />

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={CART}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={onConfirm} >
          <View style={styles.total}>
            <Text style={styles.text}>Total:</Text>
            <Text style={styles.text}>$ 100</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 120
  },
  list: {
    flex: 1,
  },
  footer:{
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm:{
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  total:{
    flexDirection: 'row',
  },
  text:{
    fontSize: 18,
    fontFamily: 'OpenSans_700Bold',
    padding: 8
  }
})