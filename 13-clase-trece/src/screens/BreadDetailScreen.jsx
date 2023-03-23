import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import { BREADS } from '../data/products'
import { useSelector } from 'react-redux'

const BreadDetailScreen = ({route}) => {
    //const productId=route.params.productId
    //const bread = BREADS.find(product => product.id === productId);
    const bread = useSelector(state=>state.breads.selected)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{bread.name}</Text>
            <Text>{bread.description}</Text>
            <Text>$ {bread.price}</Text>
            <Text>{bread.weight}</Text>
        </View>
    )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    title: {
        fontSize:20,
        fontFamily: 'OpenSans_700Bold',
        marginBottom:10
    }
})