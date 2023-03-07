import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    conatiner:{
        borderWidth:2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius:10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number:{
        color: Colors.accent,
        fontSize: 22
    }
})