import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
          headerTitleStyle: {
            fontFamily: 'OpenSans_700Bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{
            title: 'Mi Pan'
          }}
        />
        <Stack.Screen
          name="Products"
          component={CategoryBreadScreen}
          options={({ route }) => ({ title: route.params.categoryName })}

        />
        <Stack.Screen
          name="Detail"
          component={BreadDetailScreen} 
          />
      </Stack.Navigator>
  )
}

export default ShopNavigator

