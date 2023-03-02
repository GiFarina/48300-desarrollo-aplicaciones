import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Input = ({style, ...otherPros}) => {
  return (
    <TextInput style={[styles.input, style]} {...otherPros}/>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})