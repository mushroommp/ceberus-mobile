import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpContainer = () => {
    const [userEmail, setUserEmail] = useState('')
    const [displayError, setDisplayError] = useState(false)
    const [errorText, setErrorText] = useState('')

    const onSubmit = () => {
        let userDetails = {
            user_email: userEmail
        }

        axios.post('http://localhost:5000/api/users', userDetails)
        .then(function (response) {
            // handle success
            const jsonValue = JSON.stringify(response.data)
            console.log(" JSON VALUE ", jsonValue)
            // await AsyncStorage.setItem('account_login', {
            //     token: 
            // })
        })
        .catch(function (error) {
            console.log(" TEST ERROR ", error)
        })
    }

    return (
        <SafeAreaView style = {{ flex: 1, backgroundColor: 'white' }}>
            <View style = {{ paddingHorizontal: 20 }}>
                <View style = {{ paddingVertical: 20 }}>
                    <Text>Email:</Text>
                    <TextInput 
                        onChangeText={setUserEmail}
                        value={userEmail}
                        style={{ 
                            borderBottomWidth: 1,
                            marginTop: 18
                        }}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    {
                        displayError && 
                        <Text>{errorText}</Text>
                    }
                </View>
                <TouchableOpacity 
                    style = {{ alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 20, backgroundColor: 'blue' }}
                    onPress = {onSubmit}
                >
                    <Text style={{ color: 'white', fontWeight: '600' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignUpContainer