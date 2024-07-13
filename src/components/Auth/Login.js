import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';
import { useFonts, Montserrat_900Black } from '@expo-google-fonts/montserrat';

// style-components
import Button from '../style-components/Button';
import Input from '../style-components/Input';

import HeaderAuth from './HeaderAuth';

export default function Login() {

	const [fontLoaded] = useFonts({
		Montserrat_900Black
	})

    const [page, setPage] = useState("Login");
    const [checked, setChecked] = useState({aluno: false, professor: false});

    if(!fontLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>

            <HeaderAuth
                titulo={page}
            />

            {
                page === "Login" ? (
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
                                source={require('../../images/img-estudante-login.png')}
                            />
                        </View>

                        <View style={styles.containerCampos.campos}>
                            <View>
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

                            <View>
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

                                <View>
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

                            </View>


                            <View>
                                <Button
                                    background="#006BA6"
                                    func={() => alert('Botão entrar')}
                                    nome="Entrar"
                                />
                            </View>

                            <View>
                                <Text style={
                                        {
                                            fontSize: 16,
                                            marginTop: 10,
                                        }
                                    }>É novo por aqui?</Text>
                                <Button
                                    background="#053048"
                                    func={() => setPage("Cadastre-se")}
                                    nome="Cadastre-se"
                                />

                            </View>

                        </View>

                    </SafeAreaView>
                ) : (  //  -------------------------------------------------- CADASTRO --------------------------------------------------

                    <ScrollView style={styles.containerCampos}>

                        <View style={styles.containerCampos.campos}>
                            <View style={
                                {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 10,
                                    marginBottom: 20,
                                    width: '100%' ,
                                }
                            }>

                                <CheckBox
                                    title='Sou aluno'
                                    checked={checked.aluno}
                                    onPress={() => setChecked(obj => {
                                        return {...obj, aluno: !checked.aluno, professor: false }
                                    })}
                                />
                                <CheckBox
                                    title='Sou Professor'
                                    checked={checked.professor}
                                    onPress={() => setChecked(obj => {
                                        return {...obj, aluno: false, professor: !checked.professor }
                                    })}
                                />

                            </View>

                            <View>
                                <Text style={
                                    {
                                        fontSize: 17,
                                        height: 30,
                                    }
                                }>Nome</Text>
                                <Input
                                    plc="Digite seu nome completo.."
                                    corBorda="#0496FF"
                                />
                            </View>

                            <View>
                                <Text style={
                                    {
                                        fontSize: 17,
                                        height: 30,
                                    }
                                }>Email</Text>
                                <Input
                                    plc="Digite seu email.."
                                    corBorda="#0496FF"
                                />
                            </View>

                            <View>
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
                            </View>

                            <View>
                                <Text style={
                                    {
                                        fontSize: 17,
                                        height: 30,
                                    }
                                }>Confirmar senha</Text>
                                <Input
                                    plc="Digite sua senha.."
                                    corBorda="#0496FF"
                                />
                            </View>
                        </View>

                        <View style={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 15,
                                marginTop: 20,
                            }
                        }>
                            <Button
                                background="#006BA6"
                                func={() => alert('Botão cadastrar usuário')}
                                nome="Cadastrar"
                            />

                            <Button
                                background="#053048"
                                func={() => setPage("Login")}
                                nome="Logar"
                            />
                        </View>

                    </ScrollView>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
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
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
        }
    },
})