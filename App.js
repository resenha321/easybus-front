import * as React from "react";
import { } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Opcoes from './Telas/TelaOpcoes';
import Login from './Telas/Login';
import Cadastro from './Telas/Cadastro';
import Inicio from "./Telas/Inicio";
import Iti from './Telas/Iti';
import Motorista from './Telas/Motorista';
import Telafuncionario from './Telas/Telafucionario';
import Telamotorista from './Telas/Telamotorista';
import Trajeto from './Telas/Trajeto';
import Suporte from './Telas/Suporte';
import Localizacao from './Telas/Localizacao';
import CadastroMotorista from './Telas/CadastroMotorista';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Animatable.Image
        animation="flipInY"
        source={require("./assets/easybus.png")}
        style={{
          flex: 1,
          width: '100%',
          height: 0,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -100


        }}
      />

      <View
        style={{
          width: 100,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          top: -120
        }}
      >
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Opcoes')}
        >
          <Text> Entrar </Text>
        </TouchableOpacity>



      </View>

    </View>
  );
}

function Mystack() {
  return (
    <Stack.Navigator >

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Opcoes" component={Opcoes} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="CadastroMotorista" component={CadastroMotorista} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Localizacao" component={Localizacao} />
      <Stack.Screen name="Trajeto" component={Trajeto} />
      <Stack.Screen name="Tela Funcionario" component={Telafuncionario} />
      <Stack.Screen name="Tela Motorista" component={Telamotorista} />
      <Stack.Screen name="Motorista" component={Motorista} />
      <Stack.Screen name="Itinerario" component={Iti} />
      <Stack.Screen name="Suporte" component={Suporte} />


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 10
  }
})
