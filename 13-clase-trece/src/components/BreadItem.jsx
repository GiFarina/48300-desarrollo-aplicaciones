import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const BreadItem = ({item,onSelected}) => {
  return (
    <TouchableOpacity onPress={()=>onSelected(item)}>
        <View style={styles.breadItem}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View>
                <Text style={styles.detail}>{item.price}</Text>
                <Text style={styles.detail}>{item.weight}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default BreadItem

const styles = StyleSheet.create({
    breadItem:{
        padding:20,
        margin:10,
        borderRadius:3,
        backgroundColor: "#ccc"
    },
    title:{
        fontSize:20,
        fontFamily: 'OpenSans_700Bold'
    },
    detail:{
        fontSize:18,
    }
})