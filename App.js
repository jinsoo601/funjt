import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import FeedScreen from './src/screens/Feed/Feed.Container';
import SideMenu from './src/screens/SideMenu/SideMenu';
import SideMenuButton from './src/screens/CustomTopBarButtons/SideMenuButton';
import BeginTransactionButton from './src/screens/CustomTopBarButtons/BeginTransactionButton';

import openSideMenu from './src/screens/CustomTopBarButtons/openSideMenu';
import configureStore from './src/store/configureStore';

export const store = configureStore();

Navigation.registerComponent('cappo.AuthScreen', () => AuthScreen);
Navigation.registerComponent('cappo.FeedScreen', () => FeedScreen);
Navigation.registerComponent('cappo.SideMenu', () => SideMenu);
Navigation.registerComponent('cappo.SideMenuButton', () => SideMenuButton);
Navigation.registerComponent('cappo.BeginTransactionButton', () => BeginTransactionButton);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "cappo.AuthScreen"
      }
    }
  });
});