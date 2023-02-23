import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPixel } from '../utils/normalize'

const Button = () => {
  return (
    <Pressable onPress={()=>{
        console.log('button pressed')
    }}
    style={styles.container}
    >
        <Text>Button</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    height: heightPixel(50),
    width: heightPixel(200),
    justifyContent: 'center',
    alignItems: 'center'
}
})