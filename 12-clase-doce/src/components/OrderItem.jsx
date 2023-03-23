import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../constants/colors';

const formatDay = (time) => {
    const date= new Date(time)
    return date.toLocaleDateString();
}

const OrderItem = ({item,onDelete}) => {
  return (
    <View style={styles.order}>
        <View>
            <Text style={styles.date}>{formatDay(item.date)}</Text>
            <Text style={styles.total}>$ {item.total}</Text>
        </View>
        <View style={styles.actions}>
            <TouchableOpacity onPress={()=> onDelete(item.id)}>
                <Ionicons name="md-trash" size={22} color={colors.primary} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    order:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin:10,
        borderColor:"#ccc",
        borderWidth:1,
        borderRadius:6,
    },
    date: {
        fontSize:18,
    },
    total: {
        fontSize:18,
        fontFamily: 'OpenSans_700Bold'
    }
})