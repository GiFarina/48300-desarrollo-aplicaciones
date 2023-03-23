import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.item}>
        <Text style={styles.header}>{item.name}</Text>
        <View style={styles.detail}>
            <Text style={styles.text}>${item.price}</Text>
            <Text style={styles.text}>x{item.quantity}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item)}>
            <Ionicons name="md-trash" size={24} color="red" />
        </TouchableOpacity>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({ 
    item:{
        flex:1,
        padding: 8,
        borderBottomWidth:1,
        borderBottomColor: '#ccc',
    },
    header:{
        fontSize: 18,
        fontFamily: 'OpenSans_700Bold',
    },
    detail:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
    }

})