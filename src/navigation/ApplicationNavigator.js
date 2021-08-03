import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
    Text,
    View
} from 'react-native';
import MainNavigator from './Main'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SignUpContainer, SignInContainer } from '../containers'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
    const [isApplicationLoaded, setIsApplicationLoaded] = useState(true)
    const [isSignedIn, setIsSignedIn] = useState(false)

    // useEffect(() => {
    //     if (MainNavigator == null) {
    //         MainNavigator = require('./Main').default
    //         setIsApplicationLoaded(true)
    //         // console.log(" MAIN NAVIGATOR ", isApplicationLoaded)
    //         console.log(" MAIN NAVIGATOR ", MainNavigator)
    //     }
    // }, [])

    // useEffect(
    //     () => () => {
    //       setIsApplicationLoaded(false)
    //       MainNavigator = null
    //     },[]
    // )
    if(!isApplicationLoaded){
        return (
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>This is the splash screen</Text>
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignInContainer" headerMode="none">
                <Stack.Screen name="MainNavigator" component={MainNavigator} />
                <Stack.Screen name="SignInContainer" component={SignInContainer} />
                <Stack.Screen name="SignUpContainer" component={SignUpContainer} />
            </Stack.Navigator>
        </NavigationContainer>

        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="MainNavigator">
        //         <Stack.Screen
        //             name="MainNavigator"
        //             component={MainNavigator}
        //             options={{
        //                 animationEnabled: false,
        //                 headerShown: false
        //             }}
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default ApplicationNavigator