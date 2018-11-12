import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import FeedScreen from './src/screens/Feed/Feed.Container';
import CategoryScreen from './src/screens//Transaction/Category/Category.Container';
import ImagePickerScreen from './src/screens//Transaction/ImagePicker/ImagePicker.Container';
import SubcategoryScreen from './src/screens//Transaction/Subcategory/Subcategory.Container';
import SideMenu from './src/screens/SideMenu/SideMenu';
import SideMenuButton from './src/screens/CustomTopBarButtons/SideMenuButton';
import BeginTransactionButton from './src/screens/CustomTopBarButtons/BeginTransactionButton';

import configureStore from './src/store/configureStore';

export const store = configureStore();

Navigation.registerComponent('cappo.AuthScreen', () => AuthScreen);
Navigation.registerComponent('cappo.FeedScreen', () => FeedScreen);
Navigation.registerComponent('cappo.CategoryScreen', () => CategoryScreen);
Navigation.registerComponent('cappo.ImagePickerScreen', () => ImagePickerScreen);
Navigation.registerComponent('cappo.SubcategoryScreen', () => SubcategoryScreen);
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