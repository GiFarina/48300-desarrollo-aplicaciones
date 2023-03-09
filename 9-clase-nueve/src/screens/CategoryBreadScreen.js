import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryBreadScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryBreadScreen</Text>
    </View>
  )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})