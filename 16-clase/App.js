import React from 'react';
import { Provider } from 'react-redux'

import store from './store'

// navigation
import MainNavigator from './navigation'

export default function App() {
  return (<Provider store={store}><MainNavigator /></Provider>);
}
