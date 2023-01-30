import * as React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet

} from 'react-native';




export default function Inicio({ navigation }) {
  return (

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text
        style={{ fontSize: 40, color: 'white', textAlign:'center' }}>
        Bem-Vindo
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: 'white',
          alignItems: 'center',
        }}>
        Motorista User..
      </Text>

      

      <View  style={styles.container}>
      
     
      <TouchableOpacity
        color="black"
        title="User"
        onPress={() => navigation.navigate("Telafuncionario")}
        style={styles.boxPassageiro}
        activeOpacity={0.5}
      >
        <Text style={{ fontSize: 18, textAlign: "center", justifyContent:'center' }}>Funcionarios</Text>
        <Image
          source={require("../assets/group.png")}
          style={{
            width: 90,
            height: 90,
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
            marginTop: 1,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        color="black"
        title="User"
        onPress={() => navigation.navigate("Trajeto")}
        style={styles.boxMotorista}
        activeOpacity={0.5}
      >
        <Text style={{ fontSize: 18, textAlign: "center" }}>Trajeto</Text>
        <Image
          source={require("../assets/localizacao-na-estrada.png")}
          style={{
            width: 90,
            height: 90,
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
            marginTop: 1,
          }}
        />
      </TouchableOpacity>
      
    </View>

        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{}}
        activeOpacity={0.5}
      >
        <Image
          source={require("../assets/fora.png")}
          style={{
            width: 60,
            height: 60,

          }}
        />
      </TouchableOpacity>

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "red",
    width:0,
    height:0
  },
  boxPassageiro: {
    width: 130,
    height: 130,
    backgroundColor: "whitesmoke",
    margin: 10,
  },
  boxMotorista: {
    width: 130,
    height: 130,
    backgroundColor: "whitesmoke",
    margin: 10,
  },
  subContainer:{
backgroundColor:'red',
flexDirection:'row',
textAlign:'center',


  }
  
});




