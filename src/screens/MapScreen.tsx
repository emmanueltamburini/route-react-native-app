import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ThemeText} from '../components/ThemeText';

export const MapScreen = () => {
  const styles = stylesFunction();

  return (
    <SafeAreaView style={styles.container}>
      <ThemeText>MapScreen</ThemeText>
    </SafeAreaView>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });