import { Pressable, Text } from 'react-native'
import React from 'react'

const Button = ({nome, background, corBorda, widthBorda, func}) => {


  return (
    <Pressable
        style={
            {
                alignItems: 'center',
                backgroundColor: background,
                borderRadius: 7,
                display: 'flex',
                height: 40,
                justifyContent: 'center',
                marginTop: 10,
            }

        }
        onPress={func}
    >
        <Text style={
            {
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                letterSpacing: 0.5,
            }
        }>{nome}</Text>
    </Pressable>
  )
}

export default Button