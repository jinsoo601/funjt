import { Navigation } from 'react-native-navigation';
import { getTimeStr } from './scheduleUtil';
import { THEME_WHITE } from '../components/UI/theme';

export const openScheduleDetail = (schedule, parentScreenId) => {
  const title = `${getTimeStr(schedule.first.schedule.from.departAt)} ~ ${getTimeStr(schedule.first.schedule.to.departAt)}`
  Navigation.push(parentScreenId, {
    component: {
      name: 'funjt.ScheduleDetailScreen',
      passProps: {
        schedule: schedule,
        parentScreenId
      },
      options: {
        topBar: {
          title: {
            text: title,
            color: THEME_WHITE,
            alignment: 'center'
          },
          backButton: {
            title: 'Back',
            color: THEME_WHITE
          }
        }
      }
    }
  });
}

export const openSettingScreen = (parentScreenId) => {
  Navigation.push(parentScreenId, {
    component: {
      name: 'funjt.SettingScreen',
      options: {
        topBar: {
          title: {
            text: 'Setting',
            color: THEME_WHITE,
            alignment: 'center'
          },
          backButton: {
            title: 'Back',
            color: THEME_WHITE
          }
        }
      }
    }
  });
}

export const goToStatusScreen = (parentScreenId, trainNumber) => {
  Navigation.push(parentScreenId, {
    component: {
      name: 'funjt.StatusScreen',
      passProps: {
        trainNumber
      },
      options: {
        topBar: {
          title: {
            text: 'Status',
            color: THEME_WHITE,
            alignment: 'center'
          },
          backButton: {
            title: 'Back',
            color: THEME_WHITE
          }
        }
      }
    }
  });
}