import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { Polyline } from "react-native-maps";
import SelectList from "react-native-dropdown-select-list";
import MapViewDirections from "react-native-maps-directions";
import * as Permissions from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import config from "../config";

export default function Localizacao() {
  const mapEl = useRef(null);
  const [origin, SetOrigin] = useState(null);
  const [destination, SetDestination] = useState(null);
  const [distance, SetDistance] = useState(null);
  const [duration, SetDuration] = useState(null);

  useEffect(() => {
    (async function () {
      const { status, permissions } =
        await Permissions.requestForegroundPermissionsAsync();

      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        SetOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.000421,
        });
        console.log("Localização: ");
        console.log(location);

        SetDestination({
          latitude: -23.22280169131871,
          longitude: -45.85633797321765,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.000421,
        });
      } else {
        throw new Error("Location Permission not granted");
      }
    })();
  }, []);

  const gpsPonto1 = {
    latitude: -23.215996,
    longitude: -45.856122,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.000421,
  };
  const gpsInicio = {
    latitude:  -23.158119432671835,
    longitude: -45.915774685665546,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.000421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        ref={mapEl}
      >
        <MapViewDirections
          origin={gpsInicio}
          destination={destination}
          apikey={config.googleApi}
          strokeWidth={6}
          onReady={(result) => {
            SetDistance(result.distance);
            SetDuration(result.duration);
            mapEl.current.fitToCoordinates(result.coordinates, {
              edgepadding: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50,
              },
            });
            console.log(result);
          }}
        />

        <Marker
          coordinate={gpsPonto1}
          image={require("../assets/busao.webp")}
        />
      </MapView>

      <View>
        {distance && <Text style={styles.text}>Distancia: {distance} <Text> {'\n'}</Text> Duração: {duration} </Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "60%",
  },
 
  text: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    marginTop: "100%",
  },
 
});
