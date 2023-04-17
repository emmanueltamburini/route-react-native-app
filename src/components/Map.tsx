import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';

export const Map = () => {
  const {hasLocation, initialPosition} = useLocation();

  if (!hasLocation || !initialPosition) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: initialPosition?.latitude,
          longitude: initialPosition?.longitude,
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
