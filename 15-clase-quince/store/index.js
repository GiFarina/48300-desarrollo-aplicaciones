import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import PlacesReducer from './places.reducer'

const RootReducer = combineReducers({
    places: PlacesReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))

