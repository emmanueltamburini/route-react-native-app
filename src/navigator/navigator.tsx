import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';
import {MapScreen} from '../screens/MapScreen';
import {PermissionScreen} from '../screens/PermissionScreen';

export type RootStackParams = {
  MapScreen: undefined;
  PermissionScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="MapScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
