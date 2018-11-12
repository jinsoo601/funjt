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
	      name: 'cappo.CategoryScreen',
	      options: {
	      	topBar: Platform.OS === 'ios' ? iosTopBar('Category') : androidTopBar('Category', icons[0])
	      }
	    }
	  })
	});
}

export const navigateAfterCategorySelection = category => {
	Promise.all([
		Icon.getImageSource('keyboard-arrow-left', 30),
	]).then(icons => {
		if (category === 'Electronics') {
			Navigation.push('cappo.FeedScreen', {
				component: {
					name: 'cappo.SubcategoryScreen',
					options: {
						topBar: Platform.OS === 'ios' ? iosTopBar(category, 'Back') : androidTopBar(category, icons[0])
					}
				}
			});
		} else {
			Navigation.push('cappo.FeedScreen', {
				component: {
					name: 'cappo.ImagePickerScreen',
					options: {
						topBar: Platform.OS === 'ios' ? iosTopBar('Tack a Picture', 'Back') : androidTopBar('Tack a Picture', icons[0])
					}
				}
			});
		}
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

const iosTopBar = (title, backButtonText = 'Cancel') => {
	return {
		title: {
			text: title,
			color: THEME_WHITE,
			alignment: 'center'
		},
		backButton: {
	    title: backButtonText,
	    color: THEME_WHITE
	  }
	};
};

const androidTopBar = (title, icon) => {
	return {
		title: {
			text: title,
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