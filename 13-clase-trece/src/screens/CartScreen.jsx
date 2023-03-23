import { View, Text, FlatList,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { CART } from '../data/cart'
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const total=12000;

  const onHandleConfirmCart = ()=>console.log("Confirma carrito");
  const onHandleDeleteItem=()=>console.log("Elimina item")

  const renderCartItem = ({item})=>(
    <CartItem item={item} onDelete={onHandleDeleteItem} />
  )
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList 
          data={CART}     
          renderItem={renderCartItem} 
          keyExtractor={(item)=>item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={onHandleConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total: </Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:12,
    backgroundColor: '#fff',
    paddingBottom:120,
  },
  list: {
    flex:1, 
  },
  footer: {
    padding:12,
    borderTopColor: "#ccc",
    borderTopWidth:1,
  },
  confirm:{
    backgroundColor:"#F5F5F5",
    borderRadius:10,
    padding:10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  total:{
    flexDirection: 'row',
  },
  text:{
    fontSize:18,
    fontFamily:'OpenSans_700Bold',
    padding:8,
  }


})