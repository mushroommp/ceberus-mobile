import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    Text,
    View
} from 'react-native';
import { HomeContainer, WalletContainer, SignUpContainer } from '../containers'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

const TransactionScreen = () => {
  return (
    <View>
      <Text>Transaction Screen</Text>
    </View>
  )
}

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  )
}

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeContainer}
        options = {{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletContainer} 
        options = {{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Transactions" 
        component={TransactionScreen} 
        options = {{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text-box" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={SignUpContainer} 
        options = {{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
