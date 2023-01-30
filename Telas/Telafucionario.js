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

export default function Telafuncionario({ navigation }) {

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'embraer' },
    { key: '2', value: 'embraer' },
    { key: '3', value: 'embraer' },
    { key: '4', value: 'embraer' },


  ];




  return (
    <ScrollView style={styles.Scroll}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{ color: 'white', top: '5%', fontSize: 28 }}>Funcionarios</Text>

        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Funcionarios</DataTable.Title>
            <DataTable.Title>longitude</DataTable.Title>
            <DataTable.Title>latitude</DataTable.Title>
            <DataTable.Title>Destino Final</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>joao</DataTable.Cell>
            <DataTable.Cell>-34353</DataTable.Cell>
            <DataTable.Cell>34343</DataTable.Cell>
            <DataTable.Cell>Embraer</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <DataTable.Cell>fernando</DataTable.Cell>
            <DataTable.Cell>-34353</DataTable.Cell>
            <DataTable.Cell>34343</DataTable.Cell>
            <DataTable.Cell>Embraer</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
          <DataTable.Cell>carlos</DataTable.Cell>
            <DataTable.Cell>-34353</DataTable.Cell>
            <DataTable.Cell>34343</DataTable.Cell>
            <DataTable.Cell>Embraer</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
          <DataTable.Cell>marco</DataTable.Cell>
            <DataTable.Cell>-34353</DataTable.Cell>
            <DataTable.Cell>34343</DataTable.Cell>
            <DataTable.Cell>Embraer</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

       
        <Text> {'\n'}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Telamotorista")}
          style={{}}
          activeOpacity={0.5}
        >
          <Image
            source={require("../assets/pagina-inicial.png")}
            style={{
              justifyContent: "flex-end",
              width: 60,
              height: 60,
              borderRadius: 100,
              top: 150
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  // Tabela itinerario
}




const styles = StyleSheet.create({
  container: {
    color: 'white',
    padding: 15,
    backgroundColor: 'white',
    width: '95%',
    top: '35%',
    justifyContent: 'center',
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
    color: 'white',
    width: '100%',
    margin:0,
    borderRadius: 10,
  },

  Scroll: {
    backgroundColor: 'black',
    height: '100%',
    flex: 2,

  },

  Text: {
    color: "white",
    fontSize: 20,
    top: 100,

  },

});



