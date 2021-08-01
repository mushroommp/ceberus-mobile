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

const styles = {
    containerStyle: {
        paddingVertical: 32, 
        paddingHorizontal: 20, 
        borderWidth: 1,
        borderColor: '#4B9EB8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        marginVertical: 8
    },
    buttonStyle: {
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 20, 
        paddingHorizontal: 50, 
        backgroundColor: '#4B9EB8', 
        borderRadius: 10, 
        margin: 20
    },
    cardStyle: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#4B9EB8'
    }
}

const mockWallets = [
    {
        walletName: 'Adidas',
        walletPoints: 200
    }
]

const WalletContainer = () => {
    const [availableWallets, setAvailableWallets] = useState([...mockWallets])
    
    const renderItem = ({ item, index }) => (
        <View style = {styles.containerStyle} key={index}>
            <Text style = {{ fontSize: 16, fontWeight: '600' }}>{item.walletName}</Text>
            <Text style = {{ fontSize: 12, fontWeight: '600' }}>{`${item.walletPoints} Points`}</Text>
        </View>
    );

    const addWallet = () => {
        let newObj = {
            walletName: 'Test',
            walletPoints: 300
        }

        let tempArray = []
        tempArray.push(newObj)

        setAvailableWallets([...availableWallets, ...tempArray])
    }

    return (
        <SafeAreaView style = {{ flex: 1 }}>
            <View style = {styles.cardStyle}>
                <Text>Available Points</Text>
                <Text>888</Text>
            </View>
            <View style = {{ flex: 1, paddingHorizontal: 18 }}>
                <Text style = {{ marginBottom: 12, fontWeight: '700', fontSize: 14 }}>Other Available Points</Text>
                <FlatList 
                    data={availableWallets}
                    renderItem={renderItem}
                />
            </View>
            <TouchableOpacity onPress={addWallet} style = {styles.buttonStyle}>
                <Text style = {{ fontSize: 14, fontWeight: '700', color: 'white' }}>Add New Wallet</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const API = 'apiEnpoint/addNewMerchant?merchantName=Adidas'

export default WalletContainer