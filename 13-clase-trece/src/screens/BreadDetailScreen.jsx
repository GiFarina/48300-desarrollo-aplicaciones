import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import { BREADS } from '../data/products'
import { useSelector, useDispatch } from 'react-redux'

import { addItem } from '../store/actions/cart.action'

const BreadDetailScreen = () => {
    const bread = useSelector(state=>state.breads.selected)
    const dispatch = useDispatch();

    const onHandleAddToCart = ()=>{
        console.log('ADD TO CART', bread);
        dispatch(addItem({...bread, quantity:1}))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{bread.name}</Text>
            <Text>{bread.description}</Text>
            <Text>$ {bread.price}</Text>
            <Text>{bread.weight}</Text>
            <Button title='Agregar Item' onPress={() => {
                onHandleAddToCart()
            }}/>
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