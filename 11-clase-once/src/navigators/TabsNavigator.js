import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import OrderScreen from '../screens/OrderScreen';


const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Shop-tab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <BottomTabs.Screen name="Shop-tab" component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="shop" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Shop</Text>
            </View>
          )
        }}

      />
      <BottomTabs.Screen name="Cart-tab" component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons name="md-cart" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Cart</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen name="Orders-tab" component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons name="md-list" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Orders</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})