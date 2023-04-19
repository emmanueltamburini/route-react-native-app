import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../interfaces/appInterfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [initialPosition, setInitialPosition] = useState<Location>();

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location);
      setHasLocation(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => {
          console.log(err);
          reject({
            latitude: 0,
            longitude: 0,
          });
        },
        {distanceFilter: 100, enableHighAccuracy: true},
      );
    });
  };

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
  };
};
