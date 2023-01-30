import React, { useState } from "react";
import {
  Text,StyleSheet, View,
} from "react-native";
import { Button, Input,  } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from '../Style/MainStyle';
import * as Animatable from "react-native-animatable";




export default function Login({ navigation }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);


  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorPassword(null)

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail('Preencha seu e-mail corretamente')
      error = true
    }

    const ps = /(?=.{8,})/
    if (!ps.test(String(password).toLowerCase())) {
      setErrorPassword('Preencha sua senha ')
      error = true
    }

    return !error
  }


  const Salvar = () => {
    if (validar()) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Inicio" }]
      })
    }

  }

  const Cadastrar = () => {
    navigation.navigate("CadastroMotorista")
  }


  return (
    <View style={specificStyle.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={specificStyle.message}>Login Motorista</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={specificStyle.containerForm}
      >

        <Input  style={specificStyle.title} placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope',marginTop:18 }}
          onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
          }}
          keyboardType="email-address"
          errorMessage={errorEmail}
        />

        <Input style={specificStyle.title} placeholder="Sua Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock', marginTop:18 }}
          onChangeText={value => {
            setPassword(value)
            setErrorPassword(null)
          }}
          secureTextEntry={true}
          errorMessage={errorPassword}
        />

        <Button  
          icon={
            <Icon
              name='check'
              size={15}
              color='white'
            />
          }
          buttonStyle={specificStyle.button}
          title='Entrar'
          onPress={() => Salvar()}
        />

        <Button
          icon={
            <Icon
              name='user'
              size={15}
              color='white'
            />
          }
          buttonStyle={specificStyle.button}
          title='Cadastrar'
          onPress={() => Cadastrar()}
        />
      </Animatable.View>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
  },

  title: {
    color: "black",
    fontSize: 20,
    marginTop: 25,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  containerHeader: {
    marginTop: "20%",
    marginBottom: "10%",
    paddingStart: "5%",
    color: "white",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    top:25
  },
  containerForm: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    top:70
  },

  button: {
    backgroundColor: "green",
    width: "100%",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonCadastro: {
    marginTop: 14,
    alignSelf: "center",
  },
  CadastroText: {
    color: "#a1a1a1",
  },
});