import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_GREEN, THEME_WHITE } from '../../components/UI/theme';
import { openSideMenu, goBack } from '../CustomTopBarButtons/navigationActions';

Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
	if (buttonId === 'toggleSideMenu') {
		openSideMenu();
	}
	if (buttonId === 'backButton') {
		goBack();
	}
});

const startApp = () => {
	Promise.all([
		Icon.getImageSource('menu', 30),
		Icon.getImageSource('camera', 30)
	]).then(icons => {
			Navigation.setRoot({
				root: {
			    sideMenu: {
		      	left: {
		      		component: {
		      			id: 'cappo.SideMenu',
		      			name: 'cappo.SideMenu'
		      		}
		      	},
		      	center: {
		      		stack: {
					      children: [{
					        component: {
					        	id: 'cappo.FeedScreen',
					          name: 'cappo.FeedScreen',
					        },
					      }],
					      options: {
					        topBar: {
					          background: {
					          	color: THEME_GREEN
					          },
					          leftButtons: [{
					          	id: 'toggleSideMenu',
					          	icon: icons[0],
					          	color: THEME_WHITE,
					          }],
					        },
					      }
					    },
		      	},
		      },
				}
			});
		});
}

export default startApp;