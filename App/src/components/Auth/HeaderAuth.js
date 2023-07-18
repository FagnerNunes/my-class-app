import { Image, Text, View } from 'react-native'
import React from 'react'

const HeaderAuth = ({ titulo }) => {
    return (
        <View style={
            {
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                marginTop: 30,
                width: '100%'
            }
        }>
            <Image
                style={
                    {
                        height: 150,
                        objectFit: 'contain',
                        width: 150,
                    }
                }
                source={require('../../images/logo-transparente.png')}
            />
            {/* <Ionicons name="caret-forward-outline" size={20} color="#004AAD" /> */}
            <Text style={
                {
                    color: '#004AAD',
                    fontFamily: 'Montserrat_900Black',
                    fontSize: 20,
                    marginLeft: -10,
                }
            } >{titulo}</Text>
        </View>
    )
}

export default HeaderAuth

