# RouteApp

## RouteApp README

This application has designed to work with maps in android and ios with google map and apple maps, it also works with permissions in both platform.

### Getting started

You must configure your environment to handle react-native, you can check the documentation [here](https://reactnative.dev/docs/environment-setup).

Before that you must run `npm install` to install all dependencies of the app.

And finally you can run `npm run android` or `npm run ios` to compile the app in your device or emulator and run `npm start` to start the app

You also must configure, for android, the value of GOOGLE_MAPS_API_KEY in the file android/gradle.properties with a google maps api key you can generate one [here](https://console.cloud.google.com/google/maps-apis/credentials)

And you also must configure, for ios, the value of GMSServices provideAPIKey (Change the value _YOUR_API_KEY_) in the file ios/App/AppDelegate.mm with a google maps api key you can generate one [here](https://console.cloud.google.com/google/maps-apis/credentials). Notice if you want to use IOS maps this step is not necessary

This project use the following dependencies:

- [React Navigation - Getting started](<https://reactnavigation.org/docs/getting-started/>)
- [React Navigation - Stack navigator](<https://reactnavigation.org/docs/stack-navigator/>)
- [React Native Vector Icons](<https://github.com/oblador/react-native-vector-icons>)
- [React Native Permissions](<https://www.npmjs.com/package/react-native-permissions>)
- [React Native Maps](<https://github.com/react-native-maps/react-native-maps>)
- [React Native Maps - Install](<https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md>)
- [React Native Geolocation - Install](<https://github.com/michalchudziak/react-native-geolocation>)
