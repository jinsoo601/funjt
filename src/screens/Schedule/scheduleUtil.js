import { Navigation } from 'react-native-navigation';
import { LayoutAnimation } from 'react-native';

import { THEME_WHITE } from '../../components/UI/theme';
import stations from '../../constants/stations';
import stationIndex from '../../constants/stationIndex';
import { SUN, MON, TUE, WED, THU, FRI, SAT } from '../../constants/days';
import fromNewYorkRoutes from '../../assets/fromNewYorkRoutes';
import toNewYorkRoutes from '../../assets/toNewYorkRoutes';

export const getASAPSchedule = (from, to, time = null) => {
  let routes = null;

  // determine fromNY or ToNY
  if (stationIndex[from] - stationIndex[to] < 0) routes = fromNewYorkRoutes;
  if (stationIndex[from] - stationIndex[to] > 0) routes = toNewYorkRoutes;

  // determine weekend or weekday
  const { day, timeInt } = getDayAndTimeInt();
  if (isWeekend(day)) routes = routes.filter(route => route.isWeekend);
  else routes = routes.filter(route => !route.isWeekend);

  // find a route that includes from and to
  const soonest = getSoonestSchedule(routes, from, to, time || timeInt);
  const schedule = {};
  schedule.first = {
    type: 'TRAIN',
    schedule: soonest
  };
  schedule.key = soonest.trainNumber;
  return [schedule];
}

const getDayAndTimeInt = () => {
  const now = new Date();
  let day = now.getDay();
  let timeInt = getTimeInt(now);
  if (now.getHours() < 3) {
    timeInt += 2400;
    day = day - 1 < 0 ? SAT : day - 1;
  }
  return { day, timeInt };
};

const getTimeInt = (time) => {
  return time.getHours() * 100 + time.getMinutes()
};

const isWeekend = (day) => (day === SAT || day === SUN);

const getSoonestSchedule = (routes, from, to, timeInt) => {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const fromStation = route.routes.find(r => r.station === from);
    const toStation = route.routes.find(r => r.station === to);
    if (fromStation && toStation && fromStation.departAt > timeInt) {
      return {
        from: fromStation,
        to: toStation,
        trainNumber: route.trainNumber
      };
    }
  }
  return null;
}

export const getDaySchedule = (from, to) => {

};

export const openScheduleDetail = (schedule) => {
  const title = `${getTimeStr(schedule.first.schedule.departAt)} ~ ${getTimeStr(schedule.second.schedule.arriveAt)}`
  Navigation.push('funjt.ScheduleScreen', {
    component: {
      name: 'funjt.ScheduleDetailScreen',
      passProps: {
        schedule: schedule
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

export const getTimeStr = (timeInt) => {
  let hours = parseInt(timeInt/100);
  hours = `${hours > 12 ? hours - 12 : hours}`;
  hours = hours.length < 2 ? `0${hours}` : hours;
  hours = hours === '00' ? '12' : hours;
  let minutes = `${timeInt % 100}`;
  minutes = minutes.length < 2 ? `0${minutes}` : minutes;
  const AMPM = timeInt < 1200 ? 'AM' : timeInt < 2400 ? 'PM' : 'AM';

  return `${hours}:${minutes} ${AMPM}`;
};

export const getCustomLayoutSpring = () => ({
  duration: 500,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7
  },
});

export const getTrainNumberFromSchedule = schedule => {
  const { first, second } = schedule;
  if (first.type === 'TRAIN') return `#${first.schedule.trainNumber}`;
  return `#${second.schedule.trainNumber}`;
}

export const getNextSchedule = schedule => {
  return schedule;
}

export const getPrevSchedule = schedule => {
  return schedule;
}
