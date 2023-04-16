import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ThemeText} from '../components/ThemeText';
import {PermissionContext} from '../context/PermissionContext';
import {ThemeButton} from '../components/ThemeButton';

export const PermissionScreen = () => {
  const styles = stylesFunction();
  const {permissions, askLocationPermission} = useContext(PermissionContext);

  return (
    <SafeAreaView style={styles.container}>
      <ThemeText style={styles.title}>
        It is necessary the GPS to use this app
      </ThemeText>
      <ThemeButton
        title="Permission"
        onPress={askLocationPermission}
        ignoreTheme
      />
      <ThemeText style={styles.jsonText}>
        {JSON.stringify(permissions, null, 5)}
      </ThemeText>
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
    title: {
      width: 250,
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
    },
    jsonText: {
      marginTop: 20,
    },
  });
