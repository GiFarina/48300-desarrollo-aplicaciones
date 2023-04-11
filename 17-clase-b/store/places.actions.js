import * as FileSystem from 'expo-file-system'
import STATIC_MAP_API_KEY from '../keys'

export const ADD_PLACE = 'ADD_PLACE'


export const addPlace = (title, image, location ) => {
    //return { type: ADD_PLACE, payload: {title}}
    return async dispatch => {

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${STATIC_MAP_API_KEY}`)

        if(!response.ok){
            throw new Error('Respuesta invalida')
        }

        const resData = await response.json()

        if(!resData.results){
            throw new Error('No se pudo encontrar la direccion')
        }

        console.log('ResData', resData)

        const address = resData.results[0].formatted_address

        console.log('address', address)

        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({type: ADD_PLACE, payload: {title, image: Path, address, coords: location}})
    }
}