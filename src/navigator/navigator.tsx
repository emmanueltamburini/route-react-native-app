import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';
import {MapScreen} from '../screens/MapScreen';
import {PermissionScreen} from '../screens/PermissionScreen';
import {LoadingScreen} from '../screens/LoadingScreen';
import {
  PermissionContext,
  permissionInitState,
} from '../context/PermissionContext';

export type RootStackParams = {
  MapScreen: undefined;
  PermissionScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);
  const {permissions} = useContext(PermissionContext);

  if (permissions.locationStatus === permissionInitState.locationStatus) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {permissions.locationStatus === 'granted' ? (
          <Stack.Screen name="MapScreen" component={MapScreen} />
        ) : (
          <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
