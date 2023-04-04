import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import * as Location from 'expo-location'

const LocationService = ({onLocation}) => {

  const [location, setLocation] = React.useState(null)

  const handleGeolocation = async () => {
    const hasPermission = await verifyGeolocationPermission()
    if (!hasPermission) return
    
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    })
    console.log(location);
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    })
    onLocation(location.coords.latitude, location.coords.longitude)

  }

  const verifyGeolocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      alert('No se puede acceder a la ubicación')
      return false
    }
    return true
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {location ? (
          <Text> {location.lat} , {location.lng}</Text>
        ) : (
          <Text> Esperando ubicación... </Text>
        )}
      </View>
      <Button title='Obtener Location'  color={Colors.PEACH_PUFF} onPress={handleGeolocation}/>
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