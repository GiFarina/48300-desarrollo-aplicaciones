import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {store, storePersisted} from './store'

// navigation
import MainNavigator from './navigation'

export default function App() {
  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={storePersisted}>
    <MainNavigator />
    </PersistGate>
  </Provider>
  );
}
