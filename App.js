import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_PRIMARY, THEME_SECONDARY, THEME_WHITE, THEME_BLACK } from './src/components/UI/theme';
import ScheduleScreen from './src/screens/Schedule/Schedule';
import ScheduleDetailScreen from './src/screens/ScheduleDetail/ScheduleDetail';
import StatusScreen from './src/screens/Status/Status';
import DayScheduleScreen from './src/screens/DaySchedule/DaySchedule';
import SettingScreen from './src/screens/Setting/Setting';
import SettingButton from './src/components/SettingButton/SettingButton';

Navigation.registerComponent('funjt.ScheduleScreen', () => ScheduleScreen);
Navigation.registerComponent('funjt.StatusScreen', () => StatusScreen);
Navigation.registerComponent('funjt.DayScheduleScreen', () => DayScheduleScreen);
Navigation.registerComponent('funjt.ScheduleDetailScreen', () => ScheduleDetailScreen);
Navigation.registerComponent('funjt.SettingScreen', () => SettingScreen);
Navigation.registerComponent('funjt.SettingButton', () => SettingButton);

Navigation.events().registerAppLaunchedListener(() => {
	Promise.all([
		Icon.getImageSource('watch-later', 30),
		Icon.getImageSource('date-range', 30),
		Icon.getImageSource('train', 30)
	]).then(icons => {
		Navigation.setRoot({
	    root: {
		    bottomTabs: {
		      children: [
		      	{
		          stack: {
		            children: [
		              {
					          component: {
					            name: 'funjt.ScheduleScreen',
					            id: 'funjt.ScheduleScreen',
					            options: {
							          bottomTab: {
							            text: 'Schedule',
							            textColor: THEME_WHITE,
							            selectedTextColor: THEME_SECONDARY,
							            icon: icons[0],
							            iconColor: THEME_WHITE,
							            selectedIconColor: THEME_SECONDARY
							          },
							          topBar: {
							          	title: {
							          		text: 'Schedule',
							          		alignment: 'center',
							          		color: THEME_WHITE
							          	},
							          },
							        },
					          },
					        },
		            ],
		            options: {
						      bottomTab: {
						      	textColor: THEME_WHITE,
							      selectedTextColor: THEME_SECONDARY,
							      iconColor: THEME_WHITE,
							      selectedIconColor: THEME_SECONDARY
						      },
						      topBar: {
						      	background: {
						      		color: THEME_PRIMARY
						      	}
						      },
					      },
		          }
		      	},
		      	{
		          stack: {
		            children: [
		              {
					          component: {
					            name: 'funjt.DayScheduleScreen',
					            id: 'funjt.DayScheduleScreen',
					            options: {
							          bottomTab: {
							            text: 'Day Schedule',
							            textColor: THEME_WHITE,
							            selectedTextColor: THEME_SECONDARY,
							            icon: icons[1],
							            iconColor: THEME_WHITE,
							            selectedIconColor: THEME_SECONDARY
							          },
							          topBar: {
							          	title: {
							          		text: 'Choose a day',
							          		alignment: 'center',
							          		color: THEME_WHITE
							          	},
							          },
							        }
					          },
					        },
		            ],
		            options: {
						      bottomTab: {
						      	textColor: THEME_WHITE,
							      selectedTextColor: THEME_SECONDARY,
							      iconColor: THEME_WHITE,
							      selectedIconColor: THEME_SECONDARY
						      },
						      topBar: {
						      	background: {
						      		color: THEME_PRIMARY
						      	}
						      },
					      },
		          }
		      	},
		      	{
		          stack: {
		            children: [
		              {
					          component: {
					            name: 'funjt.StatusScreen',
					            id: 'funjt.StatusScreen',
					            options: {
							          bottomTab: {
							            text: 'Status',
							            textColor: THEME_WHITE,
							            selectedTextColor: THEME_SECONDARY,
							            icon: icons[2],
							            iconColor: THEME_WHITE,
							            selectedIconColor: THEME_SECONDARY
							          },
							          topBar: {
							          	title: {
							          		text: 'Status',
							          		alignment: 'center',
							          		color: THEME_WHITE
							          	},
							          },
							        }
					          },
					        },
		            ],
		            options: {
						      bottomTab: {
						      	textColor: THEME_WHITE,
							      selectedTextColor: THEME_SECONDARY,
							      iconColor: THEME_WHITE,
							      selectedIconColor: THEME_SECONDARY
						      },
						      topBar: {
						      	background: {
						      		color: THEME_PRIMARY
						      	}
						      },
					      },
		          }
		      	},
		      ],
		      options: {
			      bottomTabs: {
			      	backgroundColor: THEME_PRIMARY,
			      	titleDisplayMode: 'alwaysShow'
			      },
		      },
		    },
		  }
	  });
	});
});