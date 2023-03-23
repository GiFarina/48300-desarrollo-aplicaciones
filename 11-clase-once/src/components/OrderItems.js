import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


const OrderItems = ({item, onDelete}) => {
  return (
    <View style={styles.order}>
        <View>
        <Text style={styles.date}>{item.date.toLocaleDateString()}</Text>
        <Text style={styles.total}>{item.total}</Text>
        </View>
        <TouchableOpacity onPress={()=> onDelete(item.id)}>
        <Ionicons name="md-trash" size={24} color="red" />

        </TouchableOpacity>
    </View>
  )
}

export default OrderItems

const styles = StyleSheet.create({
    order:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    date:{
        fontSize: 16,
    },
    total:{
        fontSize: 18,
        fontFamily: 'OpenSans_700Bold',
    }
})