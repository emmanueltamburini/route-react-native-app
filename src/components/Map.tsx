import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {Fab} from './Fab';

export const Map = () => {
  const {hasLocation, initialPosition, getCurrentLocation} = useLocation();
  const mapViewRef = useRef<MapView>();

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

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
        ref={ref => (ref ? (mapViewRef.current = ref) : null)}
        showsUserLocation
        style={styles.container}
      />
      <Fab
        iconName="compass-outline"
        onPress={() => centerPosition()}
        style={styles.fabButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
