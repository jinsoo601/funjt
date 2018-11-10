import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_GREEN, THEME_WHITE } from '../../components/UI/theme';
import openSideMenu from '../CustomTopBarButtons/openSideMenu';

Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
	if (buttonId === 'toggleSideMenu') {
		openSideMenu();
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
					          passProps: {
					            text: 'stack with one child'
					          }
					        }
					      }],
					      options: {
					        topBar: {
					          title: {
					            color: THEME_WHITE,
					            alignment: 'center'
					          },
					          background: {
					          	color: THEME_GREEN
					          },
					          leftButtons: [{
					          	id: 'toggleSideMenu',
					          	icon: icons[0],
					          	color: THEME_WHITE,
					          }],
					          rightButtons: [{
					          	id: 'goToSellScreen',
					          	icon: icons[1],
					          	color: THEME_WHITE,
					          }]
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