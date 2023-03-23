import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet,View,Text } from 'react-native'
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import Ionicons from '@expo/vector-icons/Ionicons';
import OrdersScreen from '../screens/OrdersScreen'


const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator 
      initialRouteName='Shop'
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBar,
      }}
      >
        <BottomTabs.Screen 
          name="ShopTab" 
          component={ShopNavigator} 
          options={{
            tabBarIcon: ({focused})=>(
              <View style={styles.item}>
                <Ionicons name="md-home" size={24} color="black" />
                <Text>Home</Text>
              </View>
            )
          }}
          />
        <BottomTabs.Screen 
          name="CartTab" 
          component={CartNavigator}
          options={{
            tabBarIcon: ({focused})=>(
              <View style={styles.item}>
                <Ionicons name="md-cart" size={24} color="black" />
                <Text>Carrito</Text>
              </View>
            )
          }}
          />
          <BottomTabs.Screen 
          name="OrdersTab" 
          component={OrdersScreen}
          options={{
            tabBarIcon: ({focused})=>(
              <View style={styles.item}>
                <Ionicons name="document-text" size={24} color="black" />
                <Text>Ordenes</Text>
              </View>
            )
          }}
          />
    </BottomTabs.Navigator>
  )
}

export default TabNavigator

const styles=StyleSheet.create({
  tabBar:{
    shadowColor:'#7f5df0',
    shadowOffset: {width:0,height:10},
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation:5,
    position:'absolute',
    bottom:25,
    left: 20,
    right:20,
    borderRadius:15,
    height:90,
  },
  item:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})