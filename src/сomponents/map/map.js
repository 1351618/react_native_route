import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";

export default function Map() {
  const [isMapRegion, setMapRegion] = useState({
    // Широта: 55°45′07″ с.ш. Долгота: 37°36′56″
    latitude: 55.751244,
    longitude: 37.618423,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocatiion = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("в доступе к местуположения отказанно");
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      enableHightAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    // console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocatiion();
  }, []);

  return (
    <View style={styles.map}>
      <MapView style={styles.mapBlock} region={isMapRegion}>
        <Marker coordinate={isMapRegion} title="Marker" />
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={userLocatiion} style={styles.button}>
          <Text style={styles.buttonText}>Где я?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    flexDirection: "column",
  },
  mapBlock: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
