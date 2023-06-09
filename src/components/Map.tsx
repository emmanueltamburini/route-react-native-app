import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {Fab} from './Fab';

export const Map = () => {
  const {
    hasLocation,
    initialPosition,
    userLocation,
    routeLines,
    getCurrentLocation,
    followUserLocation,
    stopFollowUserLocation,
  } = useLocation();

  const mapViewRef = useRef<MapView>();
  const followUserLocationStatic = useRef(followUserLocation);
  const isFollowing = useRef<boolean>(true);
  const [showPolyline, setShowPolyline] = useState(true);

  useEffect(() => {
    followUserLocationStatic.current();
    return () => {
      stopFollowUserLocation();
    };
  }, [stopFollowUserLocation]);

  useEffect(() => {
    if (!isFollowing.current) {
      return;
    }

    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    isFollowing.current = true;
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
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onTouchStart={() => (isFollowing.current = false)}
        ref={ref => (ref ? (mapViewRef.current = ref) : null)}
        showsUserLocation
        style={styles.container}>
        {showPolyline && (
          <Polyline
            coordinates={routeLines}
            strokeColor="black"
            strokeWidth={3}
          />
        )}
      </MapView>
      <Fab
        iconName="compass-outline"
        onPress={() => centerPosition()}
        style={styles.centerButton}
      />
      <Fab
        iconName="brush-outline"
        onPress={() => setShowPolyline(value => !value)}
        style={styles.polylineButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  polylineButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
  },
});
