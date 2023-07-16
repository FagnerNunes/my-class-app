import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Pressable } from 'react-native'
import React from 'react';

import Button from '../style-components/Button';

export default function Login() {
    return (
        <View style={styles.container}>

            <Image
                style={
                    {
                        height: 200,
                        objectFit: 'contain',
                        width: 150,
                    }
                }
                source={require('../../images/logo-transparente.png')}
            />

            <SafeAreaView style={styles.containerCampos}>

                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Image
                        style={
                            {
                                height: 300,
                                objectFit: 'contain',
                                width: 230,
                            }
                        }
                        source={require('../../images/img-estudante2.png')}
                    />
                </View>

                <View style={styles.containerCampos.campos}>
                    <Text style={styles.containerCampos.campos.label}>Usuário</Text>
                    <TextInput
                        placeholder='Digite seu nome de usuário..'
                        style={styles.containerCampos.campos.input}
                    />
                </View>

                <View style={styles.containerCampos.campos}>
                    <Text style={styles.containerCampos.campos.label}>Senha</Text>
                    <TextInput
                        placeholder='Digite sua senha..'
                        style={styles.containerCampos.campos.input}
                    />
                    <Pressable onPress={() => alert("Recuperar senha")}>
                        <Text style={styles.containerCampos.campos.recuperarSenha}>Esqueci minha senha</Text>
                    </Pressable>
                </View>

                <View style={styles.containerCampos.campos}>
                    <Button
                        bgBtn="#006BA6"
                        nome="Entrar"
                    />
                </View>

                <View style={styles.containerCampos.campos}>
                    <Text style={styles.containerCampos.campos.textoBtn}>É novo por aqui?</Text>
                    <Button
                        bgBtn="#053048"
                        nome="Entrar"
                    />

                </View>

            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },

    containerCampos: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingLeft: 30,
        paddingRight: 30,

        campos: {

            label: {
                fontSize: 17,
                height: 30,
            },
            input: {
                borderColor: '#0496ff',
                borderRadius: 7,
                borderWidth: 1,
                color: '#053048',
                fontSize: 16,
                height: 40,
                padding: 10,
            },
            recuperarSenha: {
                color: '#555',
                fontSize: 14,
                padding: 5,
                textDecorationLine: 'underline',
            },

            textoBtn: {
                fontSize: 16,
                paddingBottom: 5,
            },
        }
    }
})