import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const LocationService = () => {
  return (
    <View>
      <Text>LocationService</Text>
    </View>
  )
}

export default LocationService

const styles = StyleSheet.create({
    container: {
        marginBottom:10
    },
    preview:{
        width: '100%',
        height: 200,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.BLUSH,
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
})