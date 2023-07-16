import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Pressable } from 'react-native'
import React from 'react';

export default function Login() {
    return (
        <View style={styles.container}>

            <Image
                style={
                    {
                        height: 200,
                        objectFit: 'contain',
                        width: 200,
                    }
                }
                source={require('../../images/logo-transparente.png')}
            />

            <SafeAreaView style={styles.containerCampos}>

                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Image
                        style={
                            {
                                height: 230,
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
                    <Pressable onPress={() => alert("Vamos recuperar sua senha..")}>
                        <Text style={styles.containerCampos.campos.recuperarSenha}>Esqueci minha senha</Text>
                    </Pressable>
                </View>

                <View style={styles.containerCampos.campos}>
                    <Pressable style={styles.containerCampos.campos.containerBtn} onPress={() => alert("Vamos recuperar sua senha..")}>
                        <Text style={styles.containerCampos.campos.btn}>Entrar</Text>
                    </Pressable>
                </View>

                <View style={styles.containerCampos.campos}>
                    <Text style={styles.containerCampos.campos.textoBtn}>É novo por aqui?</Text>
                    <Pressable style={styles.containerCampos.campos.containerBtn2} onPress={() => alert("Vamos recuperar sua senha..")}>
                        <Text style={styles.containerCampos.campos.btn}>Cadastre-se</Text>
                    </Pressable>
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

            containerBtn: {
                alignItems: 'center',
                backgroundColor: '#006BA6',
                borderColor: '#006BA6',
                borderRadius: 7,
                display: 'flex',
                height: 40,
                justifyContent: 'center',
            },

            containerBtn2: {
                alignItems: 'center',
                backgroundColor: '#053048',
                borderColor: '#006BA6',
                borderRadius: 7,
                display: 'flex',
                height: 40,
                justifyContent: 'center',
            },

            textoBtn: {
                fontSize: 16,
                paddingBottom: 5,
            },

            btn: {
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                letterSpacing: 0.5,
            },
        }
    }
})