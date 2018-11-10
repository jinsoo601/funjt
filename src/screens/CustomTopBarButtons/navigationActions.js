import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_GREEN, THEME_WHITE } from '../../components/UI/theme';

export const beginTransaction = () => {
	Promise.all([
		Icon.getImageSource('keyboard-arrow-left', 30),
	]).then(icons => {
		Navigation.push('cappo.FeedScreen', {
	    component: {
	      name: 'cappo.TransactionScreen',
	      options: {
	      	topBar: Platform.OS === 'ios' ? iosTopBar() : androidTopBar(icons[0])
	      }
	    }
	  })
	});
}

export const openSideMenu = () => {
	Navigation.mergeOptions('cappo.SideMenu', {
    sideMenu: {
      left: {
        visible: true,
      }
    }
  });
}

export const goBack = () => {
	Navigation.pop('cappo.FeedScreen');
}

const iosTopBar = () => {
	return {
		title: {
			text: 'Transaction',
			color: THEME_WHITE,
			alignment: 'center'
		},
		backButton: {
	    title: 'Cancel',
	    color: THEME_WHITE
	  }
	};
};

const androidTopBar = (icon) => {
	return {
		title: {
			text: 'Transaction',
			color: THEME_WHITE,
			alignment: 'center'
		},
		leftButtons: [{
			id: 'backButton',
	  	icon: icon,
	  	color: THEME_WHITE,
		}]
	};
};