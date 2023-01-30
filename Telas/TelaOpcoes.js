import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Login from "./Login";



export default function Opcoes({ navigation }) {
  return (
    <View  style={styles.container}>
      
     
      <TouchableOpacity
        color="black"
        title="User"
        onPress={() => navigation.navigate("Login")}
        style={styles.boxPassageiro}
        activeOpacity={0.5}
      >
        <Text style={{ fontSize: 20, textAlign: "center" }}>Passageiro</Text>
        <Image
          source={require("../assets/passageiro.png")}
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
        onPress={() => navigation.navigate("Motorista")}
        style={styles.boxMotorista}
        activeOpacity={0.5}
        source={require("../assets/condutor.png")}
      >
        <Text style={{ fontSize: 20, textAlign: "center" }}>Motorista</Text>
        <Image
          source={require("../assets/condutor.png")}
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
    
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "black",
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
