import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'
import { TransactionRow } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = {
    transactionBar: {
        position: 'absolute', 
        height: Dimensions.get('window').height * 1.5 / 4, 
        width: '100%',
        bottom: 0, 
        borderTopLeftRadius: 10,  
        borderTopRightRadius: 10,
        backgroundColor: 'white'
    },
    topContainer: {
        flex: 0.5
    },
    welcomeTxt: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white'
    },
    headingTxt: {
        fontSize: 12,
        color: 'white'
    },
    pointTxt: {
        fontSize: 48,
        color: 'white'
    },
    iconContainer: {
        width: 50, 
        height: 50, 
        backgroundColor: 'white', 
        borderRadius: 25, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 16
    },
    iconTxt: {
        fontSize: 14,
        fontWeight: '700',
        color: 'white'
    }
}

const mockTransactions = [
    {
        brand: 'Adidas',
        item_type: 'Footwear',
        points: '20',
        imageURL: 'https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg'
    },
    {
        brand: 'Nike',
        item_type: 'Sports clothes',
        points: '10',
        imageURL: 'https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png'
    },
    {
        brand: 'Pandora',
        item_type: 'Jewellery',
        points: '500',
        imageURL: 'https://pandoragroup.com/-/media/images/media/logo/pandora_logo_blank.jpg'
    }
]

const HomeContainer = () => {
    const [transactions, setTransactions] = useState([...mockTransactions])
    const [pointValue, setPoints] = useState('0')
    const [userDisplayName, setUserDisplayName] = useState('')

    const renderItem = ({ item, index }) => (
        <TransactionRow 
            index = {index}
            headerText = {item.brand}
            subText = {item.item_type}
            pointText = {item.points}
            imageSource = {item.imageURL}
        />
    );

    const getUserName = async () => {
        const value = await AsyncStorage.getItem('account_login');

        if(value !== null){
            let parsedData = JSON.parse(value)
            let displayName = parsedData.userName
            setUserDisplayName(displayName)
        }
    }

    const getUserBalance = async () => {
        const value = await AsyncStorage.getItem('account_login');
        if (value !== null) {
            let parsedData = JSON.parse(value)
            let userId = parsedData.userHederaId

            axios.get('http://localhost:5000/api/users/token-balance', {
                params: {
                    hederaId: userId
                }
            })
            .then(function (response) {
                let data = response.data
                let accountBalance = data.account_balance
                setPoints(accountBalance.hbars)
                console.log("SUCCESS MOBILE", response);
                
            })
            .catch(function (error) {
                console.log(" TEST ERROR ", error.response)
                
            })
        }
    }

    useEffect(() => {
        getUserBalance()
        getUserName()
    }, []);

    return (
        <SafeAreaView style = {{ flex: 1 }}>
            <View style = {{ flex: 1, backgroundColor: '#4B9EB8' }}>
                <View style = {styles.topContainer}>
                    <View style = {{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text style = {styles.welcomeTxt}>{`Welcome ${userDisplayName}!`}</Text>
                    </View>
                    <View style = {{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
                        <Text style = {styles.headingTxt}>Available Points</Text>
                        <Text style = {styles.pointTxt}>{pointValue}</Text>
                    </View>
                    <View style = {{ flex: 1, alignItems: 'center' }}>
                        <View style = {{ flexDirection: 'row' }}>
                            <View style = {{ alignItems: 'center', paddingHorizontal: 20 }}>
                                <TouchableOpacity style = {styles.iconContainer}>
                                    <MaterialCommunityIcons name="send" size={16}/>
                                </TouchableOpacity>
                                <Text style = {styles.iconTxt}>Send</Text>
                            </View>
                            <View style = {{ alignItems: 'center', paddingHorizontal: 20 }}>
                                <TouchableOpacity style = {styles.iconContainer}>
                                    <MaterialCommunityIcons name="arrow-bottom-left" size={16}/>
                                </TouchableOpacity>
                                <Text style = {styles.iconTxt}>Receive</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style = {styles.transactionBar}>
                    <View style = {{ paddingHorizontal: 20, paddingVertical: 18, borderBottomWidth: 1, borderColor: '#C4C4C4'  }}>
                        <Text style={{ fontSize: 12, fontWeight: '600' }}>Recent Transactions</Text>
                    </View>
                    <FlatList
                        data={transactions}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeContainer