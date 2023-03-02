import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color: 'black',
        fontSize: 22
    }
})