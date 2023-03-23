import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import colors from '../constants/colors'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    
        <Stack.Navigator 
            initialRouteName="Home"
                options={{
                    headerStyle: {backgroundColor: Platform.OS === "android" ? colors.primary : ""},
                    headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
                    headerTitleStyle: {fontWeight: "Bold"},
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={CategoriesScreen}
                    options= {{
                        title: "Mi pan"
                    }}
                    />
                <Stack.Screen 
                    name="Breads" 
                    component={CategoryBreadScreen} 
                    options={({route})=>({title: route.params.name})}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={BreadDetailScreen} 
                    options={({route})=>({title: route.params.name})}
                    />
        </Stack.Navigator>
  )
}

export default ShopNavigator