import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import {ThemeText} from '../components/ThemeText';
import {PermissionContext} from '../context/PermissionContext';

export const PermissionScreen = () => {
  const styles = stylesFunction();
  const {permissions, askLocationPermission} = useContext(PermissionContext);

  return (
    <SafeAreaView style={styles.container}>
      <ThemeText>PermissionScreen</ThemeText>
      <Button title="Permission" onPress={askLocationPermission} />
      <ThemeText>{JSON.stringify(permissions, null, 5)}</ThemeText>
    </SafeAreaView>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
