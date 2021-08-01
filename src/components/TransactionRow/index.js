import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

const styles = {
    containerStyle: {
        paddingVertical: 26, 
        paddingHorizontal: 20, 
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTextStyle: {
        fontWeight: '700',
        fontSize: 16
    },
    subText: {
        fontSize: 12,
        color: '#9497A7',
        marginTop: 6
    },
    pointText: {
        fontSize: 12,
        fontWeight: '600'
    },
    imageContainer: {
        height: 50,
        width: 50,
        marginRight: 20,
        borderWidth: 1, 
        borderColor: '#C4C4C4', 
        borderRadius: 20
    }
}

const TransactionRow = ({ headerText, subText, pointText, imageSource, index }) => {
    return (
        <View style = {styles.containerStyle} key = {index}>
            <View>
                <Image source={{ uri: imageSource }} style = {styles.imageContainer} resizeMode = {'contain'} />
            </View>
            <View style = {{ flex: 2 }}>
                <Text style={styles.headerTextStyle}>{headerText}</Text>
                <Text style={styles.subText}>{subText}</Text>
            </View>
            <View style = {{ flex: 0.5, justifyContent: 'center' }}>
                <Text style={styles.pointText}>{`${pointText} points`}</Text>
            </View>
        </View>
    )
}

export default TransactionRow