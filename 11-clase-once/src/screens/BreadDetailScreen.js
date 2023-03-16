import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const BreadDetailScreen = ({ route, navigation}) => {

  const { bread } = route.params


  useEffect(() => {
    navigation.setOptions({
      title: bread.name
    })
  },[])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>Price: ${bread.price}</Text>
      <Text>{bread.weight}</Text>
      <Text>{bread.description}</Text>
    </View>
  )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
    }
})