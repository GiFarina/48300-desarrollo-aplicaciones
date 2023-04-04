import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import * as Location from 'expo-location'
import MapPreview from './MapPreview'
import { useNavigation, useRoute } from '@react-navigation/native'

const LocationService = ({ onLocation }) => {

  const navigation = useNavigation()
  const route = useRoute()

  const mapLocation = route.params?.mapLocation;

  React.useEffect(() => {
    if (mapLocation) {
      setLocation(mapLocation)
      onLocation(mapLocation.lat, mapLocation.lng)
    }
  }, [mapLocation])

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

  const handlePickOnMap = async() => {
    const hasPermission = await verifyGeolocationPermission()
    if (!hasPermission) return

    navigation.navigate('Map')
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
      <MapPreview mapStyle={styles.preview} location={location} >
        <Text> Esperando ubicación... </Text>
      </MapPreview>
      <View style={styles.actions}>
      <Button title='Obtener Location' color={Colors.PEACH_PUFF} onPress={handleGeolocation} />
      <Button title='Elegir del mapa' color={Colors.LIGTH_PINK} onPress={handlePickOnMap} />
      </View>
    </View>
  )
}

export default LocationService

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.BLUSH,
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})