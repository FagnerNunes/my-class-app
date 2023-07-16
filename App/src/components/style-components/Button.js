import { Pressable, Text } from 'react-native'
import React from 'react'

const Button = ({bgBtn, nome}) => {
  return (
    <Pressable style={
        {
            alignItems: 'center',
            backgroundColor: bgBtn,
            borderColor: '#006BA6',
            borderRadius: 7,
            display: 'flex',
            height: 40,
            justifyContent: 'center',
            marginTop: 10,
        }
    }>
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