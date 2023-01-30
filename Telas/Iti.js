import * as React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView


} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import type { Node } from 'react';
import { DataTable } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import SelectList from 'react-native-dropdown-select-list';
import { color } from 'react-native-reanimated';

export default function Itinerario({ navigation }) {

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'Zona Norte' },
    { key: '2', value: 'Zona Sul' },
    { key: '3', value: 'Zona Leste' },
    { key: '4', value: 'Zona Oeste' },


  ];




  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{ color: 'white', top: '5%', fontSize: 28 }}>Itinerario</Text>

        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Linha</DataTable.Title>
            <DataTable.Title>Bairro</DataTable.Title>
            <DataTable.Title>Horário Partida</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>617</DataTable.Cell>
            <DataTable.Cell>Jd.Satélite</DataTable.Cell>
            <DataTable.Cell>06h35</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>115</DataTable.Cell>
            <DataTable.Cell>Alto da ponte</DataTable.Cell>
            <DataTable.Cell>12h00</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>112</DataTable.Cell>
            <DataTable.Cell>Pio-x</DataTable.Cell>
            <DataTable.Cell>20h00</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>222</DataTable.Cell>
            <DataTable.Cell>vila paiva</DataTable.Cell>
            <DataTable.Cell>16h00</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <View style={{ paddingHorizontal: 2, paddingVertical: 10, flex: 1, top: '10%', color:'white' }}>
          <SelectList
            data={data}
            setSelected={setSelected}
            dropdownStyles={{ backgroundColor: 'white', color:'white'}}
          />

        </View>
        <Text> {'\n'}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Inicio")}
          style={{}}
          activeOpacity={0.5}
        >
          <Image
            source={require("../assets/pagina-inicial.png")}
            style={{
              width: 40,
              height: 40,
              alignItems:'center',
              justifyContent:'center',
              margin:30
              
            }}
          />
        </TouchableOpacity>
      </View>
  );

  // Tabela itinerario
}




const styles = StyleSheet.create({
  container: {
    color: 'white',
    padding: 15,
    backgroundColor: 'white',
    width: '95%',
    top: '10%',
    justifyContent: 'center',
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
    color: 'white',
    width: '100%',
    borderRadius: 10,
  },

  
  Text: {
    color: "white",
    fontSize: 20,
    top: 100,

  },

});



