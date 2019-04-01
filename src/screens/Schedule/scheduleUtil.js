import { Navigation } from 'react-native-navigation';
import { LayoutAnimation } from 'react-native';

import { THEME_WHITE } from '../../components/UI/theme';
import stations from '../../constants/stations';
import stationIndex from '../../constants/stationIndex';
import { SUN, MON, TUE, WED, THU, FRI, SAT } from '../../constants/days';
import fromNewYorkRoutes from '../../assets/fromNewYorkRoutes';
import toNewYorkRoutes from '../../assets/toNewYorkRoutes';
import { busToPrinceton, busToJunction } from '../../assets/busSchedule';

export const getASAPSchedule = (from, to, time = null) => {
  if (from === stations.PRINCETON) {
    return getFromPrincetonASAPSchedule(to);
  }
  if (to === stations.PRINCETON) {
    return getToPrincetonASAPSchedule(from);
  }

  const routes = initializeRoutes(from, to);
  const { timeInt } = getDayAndTimeInt();
  console.log(routes[0]);

  // find a route that includes from and to
  const soonest = getSoonestTrainSchedule(routes, from, to, time || timeInt);
  const schedule = {};
  schedule.first = {
    type: 'TRAIN',
    schedule: soonest
  };
  schedule.key = soonest.trainNumber + `${Math.random()}`;
  return [schedule];
}

const getFromPrincetonASAPSchedule = (to) => {
  const routes = initializeRoutes(stations.PRINCETON_JUNCTION, to);
  let { day, timeInt } = getDayAndTimeInt();
  const soonestBusToPrincetonJunction = getSoonestBusSchedule(busToJunction, day, timeInt);
  const busArrivalTime = soonestBusToPrincetonJunction.arriveAt;
  const soonestTrainToNewYork = getSoonestTrainSchedule(routes, stations.PRINCETON_JUNCTION, to, busArrivalTime);

  const schedule = {
    first: {
      type: 'BUS',
      schedule: {
        from: { station: stations.PRINCETON, departAt: soonestBusToPrincetonJunction.departAt },
        to: { station: stations.PRINCETON_JUNCTION, departAt: busArrivalTime }
      }
    },
    second: {
      type: 'TRAIN',
      schedule: soonestTrainToNewYork
    },
    key: soonestTrainToNewYork.trainNumber + `${Math.random()}`
  }
  return [schedule];
}

const getToPrincetonASAPSchedule = (from) => {
  const routes = initializeRoutes(from, stations.PRINCETON_JUNCTION);
  let { day, timeInt } = getDayAndTimeInt();
  /*
  schedule = {
    from: { station, departAt }, to: { station, departAt }, trainNumber
  }
  */
  const schedule = {};
  const soonestTrainToPrincetonJunction = getSoonestTrainSchedule(routes, from, stations.PRINCETON_JUNCTION, timeInt);
  const trainArrivalTime = soonestTrainToPrincetonJunction.to.departAt;
  if (trainArrivalTime >= 2400) {
    day = day + 1 > 6 ? SUN : day + 1;
    trainArrivalTime -= 2400;
  }
  const soonestBusToPrinceton = getSoonestBusSchedule(busToPrinceton, day, trainArrivalTime);

  schedule.first = {
    type: 'TRAIN',
    schedule: soonestTrainToPrincetonJunction
  };
  schedule.second = {
    type: 'BUS',
    schedule: {
      from: { station: stations.PRINCETON_JUNCTION, departAt: soonestBusToPrinceton.departAt },
      to: { station: stations.PRINCETON, departAt: soonestBusToPrinceton.arriveAt }
    }
  };
  schedule.key = soonestTrainToPrincetonJunction.trainNumber + `${Math.random()}`;

  return [schedule];
}

const getSoonestTrainSchedule = (routes, from, to, timeInt) => {
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
  // if code got here, then there was no match. Modify args and search again.
  const { day } = getDayAndTimeInt();
  const newRoutes = initializeRoutes(from, to, day + 1);
  return getSoonestTrainSchedule(newRoutes, from, to, timeInt - 2400);
}

const getSoonestBusSchedule = (busSchedules, day, timeInt) => {
  let schedule = null;
  const today = day > 6 ? SUN : day;
  const todaySchedules = busSchedules[today];
  for (let i = 0, len = todaySchedules.length; i < len; i++) {
    if (todaySchedules[i].departAt > timeInt) {
      schedule = todaySchedules[i];
      break;
    }
  }
  if (!schedule) {
    schedule = getSoonestSchedule(schedules, day + 1, timeInt - 2400);
  }
  return schedule;
}

const initializeRoutes = (from, to, today = null) => {
  let routes = null;

  // determine fromNY or ToNY
  if (stationIndex[from] - stationIndex[to] < 0) routes = fromNewYorkRoutes;
  if (stationIndex[from] - stationIndex[to] > 0) routes = toNewYorkRoutes;

  // determine weekend or weekday
  const { day } = getDayAndTimeInt();
  if (isWeekend(today || day)) return routes.filter(route => route.isWeekend);
  else return routes.filter(route => !route.isWeekend);
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

export const getDaySchedule = (from, to) => {
  const routes = initializeRoutes(from, to);

  let schedules = [];
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const fromStation = route.routes.find(r => r.station === from);
    const toStation = route.routes.find(r => r.station === to);
    if (fromStation && toStation) {
      schedules.push({
        first: {
          type: 'TRAIN',
          schedule: {
            from: fromStation,
            to: toStation,
            trainNumber: route.trainNumber
          }
        },
        key: route.trainNumber
      });
    }
  }

  return schedules;
};

export const openScheduleDetail = (schedule) => {
  const title = `${getTimeStr(schedule.first.schedule.from.departAt)} ~ ${getTimeStr(schedule.first.schedule.to.departAt)}`
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
  hours = `${hours % 12}`;
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

export const getDepartAtAndArrivalAt = (schedule) => {
  if (schedule.second) {
    return {
      departAt: schedule.first.schedule.from.departAt,
      arriveAt: schedule.second.schedule.to.departAt
    };
  }
  return {
    departAt: schedule.first.schedule.from.departAt,
    arriveAt: schedule.first.schedule.to.departAt
  };
}

export const getNextSchedule = schedule => {
  return schedule;
}

export const getPrevSchedule = schedule => {
  return schedule;
}
