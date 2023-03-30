import { ADD_PLACE } from './places.actions'
import Place from '../models/Place'

const initialState = {
    places: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), action.payload.title)
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
        default:
            return state
    }
}