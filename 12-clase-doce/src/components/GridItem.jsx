import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const GridItem = ({item,onSelected}) => {
  return (
    <View style={styles.gridItem}>
        <TouchableOpacity
            onPress={()=>onSelected(item)}
            style={{...styles.container,backgroundColor:item.color}}
        >
            <View style={styles.title}>
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        borderRadius:6,
        margin:15,
        height:150,
    },
    container:{
        flex:1,
        borderRadius:6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding:0,
    },
    title:{
        fontFamily: 'OpenSans_700Bold'
    }
})