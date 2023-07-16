import { TextInput } from 'react-native'
import React from 'react'

export default function Input({plc, corBorda}) {
  return (
    <TextInput
        style={
            {
                borderColor: corBorda,
                borderRadius: 7,
                borderWidth: 1,
                color: '#053048',
                fontSize: 16,
                height: 40,
                padding: 10,
            }
        }
        placeholder={plc}
    />
  )
}