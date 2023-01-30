import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text
        style={{ fontSize: 45, color: 'white', textAlign: 'center' }}>
        Bem-Vindo
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: 'white',
          alignItems: 'center',
        }}>
        User....
      </Text>
      <View style={styles.container}>
        <TouchableOpacity
          color="black"
          title="User"
          onPress={() => navigation.navigate("Itinerario")}
          style={styles.boxPassageiro}
          activeOpacity={0.5}
        >
          <Text style={{ fontSize: 20, textAlign: "center", justifyContent: 'center' }}>Itinerario</Text>
          <Image
            source={require("../assets/bus.png")}
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
          onPress={() => navigation.navigate("Localizacao")}
          style={styles.boxMotorista}
          activeOpacity={0.5}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>Localizção</Text>
          <Image
            source={require("../assets/pin.png")}
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
    width: 0,
    height: 0
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
  subContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    textAlign: 'center',


  }

});


function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Inicio() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF8C00',
        tabBarInactiveBackgroundColor: 'black',

      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarActiveBackgroundColor: "black",
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color='white' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarActiveBackgroundColor: "black",
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color='white' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveBackgroundColor: "black",
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color='white' size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


