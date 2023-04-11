import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const MapScreen = ({ navigation }) => {

    const initialRegion = {
        latitude: 37.42,
        longitude: -122.08,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const [selectedLocation, setSelectedLocation] = React.useState()

    const selectLocationHandler = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    const handleSave = () => {
        if (selectedLocation) {
            navigation.navigate('Nuevo', { mapLocation: selectedLocation })
        }
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Text style={selectedLocation ? { color: 'black' } : { color: '#ccc' }} onPress={handleSave}>Guardar</Text>
            )
        })
    }, [navigation, handleSave])

    return (
        <MapView style={styles.container} initialRegion={initialRegion} provider='google' onPress={selectLocationHandler}>
            {selectedLocation && <Marker title="Ubicacion" coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }} />}
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapScreen
