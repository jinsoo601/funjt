import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import FeedScreen from './src/screens/Feed/Feed';
import SideMenu from './src/screens/SideMenu/SideMenu';
import SideMenuButton from './src/screens/CustomTopBarButtons/SideMenuButton';

Navigation.registerComponent('cappo.AuthScreen', () => AuthScreen);
Navigation.registerComponent('cappo.FeedScreen', () => FeedScreen);
Navigation.registerComponent('cappo.SideMenu', () => SideMenu);
Navigation.registerComponent('cappo.SideMenuButton', () => SideMenuButton);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "cappo.AuthScreen"
      }
    }
  });
});