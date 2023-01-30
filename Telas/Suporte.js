

import * as React from 'react';
import {
  View,
  Text
 

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Suporte() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
       
        <Text style={{ color: 'white' }}>ola bem Vindo </Text>
      </View>
    );
  }


