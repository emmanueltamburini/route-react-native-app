import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Map} from '../components/Map';

export const MapScreen = () => {
  const styles = stylesFunction();

  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
