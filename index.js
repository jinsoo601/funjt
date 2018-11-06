/** @format */

import { Navigation } from 'react-native-navigation';
import App from './App';

Navigation.registerComponent(`cappo.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "cappo.WelcomeScreen"
      }
    }
  });
});
