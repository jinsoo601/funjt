import { Navigation } from 'react-native-navigation';

export default () => {
	Navigation.mergeOptions('cappo.SideMenu', {
    sideMenu: {
      left: {
        visible: true,
      }
    }
  });
}