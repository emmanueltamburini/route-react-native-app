import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';

export const MapScreen = () => {
  const styles = stylesFunction();

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
