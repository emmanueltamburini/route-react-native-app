import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Map} from '../components/Map';
import {MarkerProps} from '../interfaces/MarkerInterface';

const maps: MarkerProps[] = [
  {
    coordinate: {
      latitude: 37.8,
      longitude: -122.4324,
    },
    title: 'Map1',
    description: 'Description de Map 1',
  },
  {
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4354,
    },
    title: 'Map2',
    description: 'Description de Map 2',
  },
  {
    coordinate: {
      latitude: 37.76,
      longitude: -122.4365,
    },
    title: 'Map3',
    description: 'Description de Map 2',
  },
];

export const MapScreen = () => {
  const styles = stylesFunction();

  return (
    <SafeAreaView style={styles.container}>
      <Map markers={maps} />
    </SafeAreaView>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
