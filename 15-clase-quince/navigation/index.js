import React from 'react'
import { NavigationContainer } from "@react-navigation/native";

// stacks
import PlaceNavigator from './PlaceNavigator'

export default () => (
    <NavigationContainer>
        <PlaceNavigator />
    </NavigationContainer>
)