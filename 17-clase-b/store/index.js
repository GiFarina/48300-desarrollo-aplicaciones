import { createStore, combineReducers, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }
// reducers
import PlacesReducer from './places.reducer'

const rootReducer = combineReducers({
    places: PlacesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const storePersisted = persistStore(store);