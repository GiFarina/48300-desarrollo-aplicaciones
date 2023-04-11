import { ADD_PLACE, LOAD_PLACES } from './places.actions'
import Place from '../models/Place'

const initialState = {
    places: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(action.payload.id.toString(), action.payload.title, action.payload.image, action.payload.address, action.payload.lat, action.payload.lng)
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
        case LOAD_PLACES:
            return {
                ...state,
                places: action.payload.places.map(pl => new Place(pl.id.toString(), pl.title, pl.image, pl.address, pl.lat, pl.lng))
            }
        default:
            return state
    }
}