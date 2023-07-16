import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Pressable } from 'react-native'
import React from 'react';

import Button from '../style-components/Button';
import Input from '../style-components/Input';

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
                                height: 250,
                                objectFit: 'contain',
                                width: 230,
                            }
                        }
                        source={require('../../images/img-estudante2.png')}
                    />
                </View>

                <View style={styles.containerCampos.campos}>
                    <Text style={
                        {
                            fontSize: 17,
                            height: 30,
                        }
                    }>Usuário</Text>
                    <Input
                        plc="Digite seu nome de usuário.."
                        corBorda="#0496FF"
                    />
                </View>

                <View style={styles.containerCampos.campos}>
                    <Text style={
                        {
                            fontSize: 17,
                            height: 30,
                        }
                    }>Senha</Text>
                    <Input
                        plc="Digite sua senha.."
                        corBorda="#0496FF"
                    />
                    <Pressable onPress={() => alert("Recuperar senha")}>
                        <Text style={
                            {
                                color: '#555',
                                fontSize: 15,
                                marginTop: 5,
                                padding: 5,
                                textAlign: 'right',
                                textDecorationLine: 'underline',
                            }
                        }>Esqueci minha senha</Text>
                    </Pressable>
                </View>

                <View style={styles.containerCampos.campos}>
                    <Button
                        background="#006BA6"
                        func={() => alert('Botão entrar')}
                        nome="Entrar"
                    />
                </View>

                <View style={styles.containerCampos.campos}>
                    <Text style={
                            {
                                fontSize: 16,
                                marginTop: 10,
                            }
                        }>É novo por aqui?</Text>
                    <Button
                        background="#053048"
                        func={() => alert('Botão cadastrar')}
                        nome="Cadastre-se"
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
    }
})