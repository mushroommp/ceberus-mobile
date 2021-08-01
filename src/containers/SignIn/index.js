import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'

const SignInContainer = () => {
    const [username, setUserName] = useState('')
    const [password, setUserPassword] = useState('')

    return (
        <SafeAreaView style = {{ flex: 1, backgroundColor: '#028090' }}>
            <View style = {styles.bottomContainer}>
                <Text style={styles.signInTxt}>Sign In</Text>
                <View style={styles.inputContainer}>
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={styles.headerTxt}>Email</Text>
                        <TextInput 
                            onChangeText={setUserName}
                            value={username}
                            placeholder={'Enter your email'}
                            style={{ 
                                borderBottomWidth: 1,
                                paddingVertical: 12
                            }}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <View style={{ paddingVertical: 20, marginBottom: 12 }}>
                        <Text style={styles.headerTxt}>Password</Text>
                        <TextInput 
                            onChangeText={setUserPassword}
                            value={password}
                            placeholder={'Enter your password'}
                            style={{ 
                                borderBottomWidth: 1,
                                paddingVertical: 12
                            }}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <TouchableOpacity style={styles.signInBtn}>
                        <Text style={styles.loginTxt}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 12, alignItems: 'center' }}>
                        <Text style={styles.bottomTxt}>Don't have an account ? <Text style={[styles.bottomTxt, styles.signUpTxt]} onPress={() => console.log(" SING UP ")}>Sign-up</Text></Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        position: 'absolute', 
        height: Dimensions.get('window').height * 2.5 / 4, 
        width: '100%',
        bottom: 0, 
        borderTopLeftRadius: 20,  
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    signInTxt: {
        color: '#05668D',
        fontWeight: '700',
        fontSize: 32,
        fontFamily: 'Futura'
    },
    headerTxt: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Futura',
        marginBottom: 8,
        fontWeight: '600'
    },
    inputContainer: {
        marginTop: 38,
        paddingHorizontal: 12
    },
    signInBtn: {
        backgroundColor: '#05668D',
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderRadius: 28,
        alignItems: 'center',
        marginBottom: 18
    },
    loginTxt: {
        fontFamily: 'Futura',
        fontWeight: '600',
        fontSize: 18,
        color: 'white'
    },
    bottomTxt: {
        fontFamily: 'Futura',
        fontWeight: '600',
        fontSize: 14
    },
    signUpTxt: {
        color: '#05668D',
        fontFamily: 'Futura',
    }
})

export default SignInContainer