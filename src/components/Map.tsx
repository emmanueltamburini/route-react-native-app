import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 8.618,
          longitude: -71.143,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
