import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";


export default function Cadastro({ navigation }) {

  const [email, setEmail] = useState(null);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSelected, setSelected] = useState(false);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorNome, setErrorNome] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorTelefone, setErrorTelefone] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorCpf(null)
    setErrorPassword(null)
    setErrorTelefone(null)

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail('Preencha seu e-mail corretamente')
      error = true
    }

    const cd = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if (!cd.test(String(cpf).toLowerCase())) {
      setErrorCpf('Preencha seu CPF')
      error = true
    }
    const ps = /(?=.{8,})/
    if (!ps.test(String(password).toLowerCase())) {
      setErrorPassword('Preencha sua senha ')
      error = true
    }

    const rd = /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g;
    if (!rd.test(String(telefone).toLowerCase())) {
      setErrorTelefone('Preencha seu telefone')
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

  return (
    <View style={[specificStyle.container]}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={specificStyle.containerHeader}
      >
        <Text style={specificStyle.message}>Cadastro Motorista</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={specificStyle.containerForm}
      >
        <Input style={specificStyle.title} placeholder="E-mail"
          leftIcon={{ type: 'font-awesome' }}
          onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
          }}
          keyboardType="email-address"
          errorMessage={errorEmail}
        />

        <Input placeholder="Nome"
          leftIcon={{ type: 'font-awesome', }}
          onChangeText={value => setNome(value)}
          errorMessage={errorNome}
        />

        <Input placeholder="Cpf"
          leftIcon={{ type: 'font-awesome' }}
          onChangeText={value => {
            setCpf(value)
            setErrorCpf(null)
          }}
          keyboardType="number-pad"
          returnKeyType="done"
          errorMessage={errorCpf}
        />

        <Input placeholder="Telefone"
          leftIcon={{ type: 'font-awesome' }}
          onChangeText={value => setTelefone(value)}
          keyboardType="phone-pad"
          returnKeyType='done'
          errorMessage={errorTelefone}
        />

        <Input placeholder="Sua Senha"
          leftIcon={{ type: 'font-awesome' }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          errorMessage={errorPassword}
        />

        <CheckBox
          title={'Eu aceito os termos de uso'}

          checkedIcon='check'
          uncheckedIcon='square-o'
          checkedColor="green"
          uncheckedColor="red"
          checked={isSelected}
          onPress={() => setSelected(!isSelected)}
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
          title='Salvar'
          onPress={() => Salvar()}
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
    marginTop: "10%",
    marginBottom: "10%",
    paddingStart: "0%",
    color: "white",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    top: -10
  },
  containerForm: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    top:-10
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


