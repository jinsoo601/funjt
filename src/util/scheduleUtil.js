import { THEME_WHITE } from '../components/UI/theme';
import stations from '../constants/stations';
import stationIndex from '../constants/stationIndex';
import { SUN, MON, TUE, WED, THU, FRI, SAT } from '../constants/days';
import fromNewYorkRoutes from '../assets/fromNewYorkRoutes';
import toNewYorkRoutes from '../assets/toNewYorkRoutes';
import { busToPrinceton, busToJunction } from '../assets/busSchedule';

export const getASAPSchedule = (from, to, time = null) => {
  if (from === stations.PRINCETON) {
    return getFromPrincetonASAPSchedule(to, time);
  }
  if (to === stations.PRINCETON) {
    return getToPrincetonASAPSchedule(from, time);
  }

  const routes = initializeRoutes(from, to);
  const { timeInt } = getDayAndTimeInt();

  // find a route that includes from and to
  const soonest = getSoonestTrainSchedule(routes, from, to, time || timeInt);
  if (!soonest) return [];

  const schedule = {};
  schedule.first = {
    type: 'TRAIN',
    schedule: soonest
  };
  schedule.key = soonest.trainNumber + `${Math.random()}`;
  return [schedule];
}

const getFromPrincetonASAPSchedule = (to, time = null) => {
  let { day, timeInt } = getDayAndTimeInt();
  const soonestBusToPrincetonJunction = getSoonestBusSchedule(busToJunction, day, time || timeInt);
  if (to === stations.PRINCETON_JUNCTION) {
    const { departAt, arriveAt } = soonestBusToPrincetonJunction;
    return [{
      first: {
        type: 'BUS',
        schedule: {
          from: { station: stations.PRINCETON, departAt: departAt },
          to: { station: stations.PRINCETON_JUNCTION, departAt: arriveAt }
        }
      },
      key: 'BUS TO JUNCTION'
    }]
  };

  const busArrivalTime = soonestBusToPrincetonJunction.arriveAt;
  const routes = initializeRoutes(stations.PRINCETON_JUNCTION, to);
  const soonestTrainToNewYork = getSoonestTrainSchedule(routes, stations.PRINCETON_JUNCTION, to, busArrivalTime);
  if (!soonestTrainToNewYork) return [];

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

const getToPrincetonASAPSchedule = (from, time = null) => {
  const { day, timeInt } = getDayAndTimeInt();
  if (from === stations.PRINCETON_JUNCTION) {
    const { departAt, arriveAt } = getSoonestBusSchedule(busToPrinceton, day, time || timeInt);
    return [{
      first: {
        type: 'BUS',
        schedule: {
          from: { station: stations.PRINCETON, departAt: departAt },
          to: { station: stations.PRINCETON_JUNCTION, departAt: arriveAt }
        }
      },
      key: 'BUS TO PRINCETON'
    }]
  };

  /*
  schedule = {
    from: { station, departAt }, to: { station, departAt }, trainNumber
  }
  */
  const routes = initializeRoutes(from, stations.PRINCETON_JUNCTION);
  const schedule = {};
  const soonestTrainToPrincetonJunction = getSoonestTrainSchedule(routes, from, stations.PRINCETON_JUNCTION,time || timeInt);
  if (!soonestTrainToPrincetonJunction) return [];
  let trainArrivalTime = soonestTrainToPrincetonJunction.to.departAt;
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
  if (timeInt < 0) return null;
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
    schedule = getSoonestBusSchedule(busSchedules, day + 1, timeInt - 2400);
  }
  return schedule;
}

const initializeRoutes = (from, to, customDay = null) => {
  let routes = null;

  // determine fromNY or ToNY
  if (stationIndex[from] - stationIndex[to] < 0) routes = fromNewYorkRoutes;
  if (stationIndex[from] - stationIndex[to] > 0) routes = toNewYorkRoutes;

  // determine weekend or weekday
  const { day } = getDayAndTimeInt();
  if (isWeekend(customDay === null ? day : customDay)) return routes.filter(route => route.isWeekend);
  else return routes.filter(route => !route.isWeekend);
}

const getDayAndTimeInt = () => {
  const now = new Date();
  let day = now.getDay();
  let timeInt = getTimeInt(now);
  if (now.getHours() < 3) {
    day = day - 1 < 0 ? 6 : day - 1;
    timeInt += 2400;
  }
  return { day, timeInt };
};

const getTimeInt = (time) => {
  return time.getHours() * 100 + time.getMinutes()
};

const isWeekend = (day) => {
  return day === SAT || day === SUN;
};

export const getDaySchedule = (from, to, day = null) => {
  if (from === stations.PRINCETON) {
    return getFromPrincetonDaySchedule(to, day);
  }
  if (to === stations.PRINCETON) {
    return getToPrincetonDaySchedule(from, day);
  }
  const routes = initializeRoutes(from, to, day);

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

const getFromPrincetonDaySchedule = (to, customDay = null) => {
  const { day, timeInt } = getDayAndTimeInt();
  const schedules = busToJunction[customDay === null ? day : customDay].map((schedule, idx) => ({
    first: {
      type: 'BUS',
      schedule: {
        from: { station: stations.PRINCETON, departAt: schedule.departAt },
        to: { station: stations.PRINCETON_JUNCTION, departAt: schedule.arriveAt }
      }
    },
    key: `BUS-${idx}`
  }));
  if (to === stations.PRINCETON_JUNCTION) return schedules;

  const routes = initializeRoutes(stations.PRINCETON_JUNCTION, to, customDay);
  schedules.forEach(schedule => {
    const busArrivalTime = schedule.first.schedule.to.departAt;
    schedule.second = {
      type: 'TRAIN',
      schedule: getSoonestTrainSchedule(routes, stations.PRINCETON_JUNCTION, to, busArrivalTime)
    };
    schedule.key = `${Math.random()}`
  });
  if (!schedules[0].second.schedule) return [];

  return schedules;
}

const getToPrincetonDaySchedule = (from, customDay = null) => {
  const { day } = getDayAndTimeInt();
  if (from === stations.PRINCETON_JUNCTION) {
    const schedules = busToPrinceton[customDay === null ? day : customDay].map((schedule, idx) => ({
      first: {
        type: 'BUS',
        schedule: {
          from: { station: stations.PRINCETON_JUNCTION, departAt: schedule.departAt },
          to: { station: stations.PRINCETON, departAt: schedule.arriveAt }
        }
      },
      key: `BUS-${idx}`
    }));
    return schedules;
  }

  const routes = initializeRoutes(from, stations.PRINCETON_JUNCTION, customDay);
  let schedules = [];
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const fromStation = route.routes.find(r => r.station === from);
    const toStation = route.routes.find(r => r.station === stations.PRINCETON_JUNCTION);
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

  schedules.forEach(schedule => {
    const trainArrivalTime = schedule.first.schedule.to.departAt;
    const soonestBus = getSoonestBusSchedule(busToPrinceton, customDay === null ? day : customDay, trainArrivalTime)
    schedule.second = {
      type: 'BUS',
      schedule: {
        from: { station: stations.PRINCETON_JUNCTION, departAt: soonestBus.departAt },
        to: { station: stations.PRINCETON, departAt: soonestBus.arriveAt }
      }
    };
  });

  return schedules;
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

export const getTrainNumberFromSchedule = (schedule) => {
  const { first, second } = schedule;
  if (first.type === 'TRAIN') return `#${first.schedule.trainNumber}`;
  if (!second) return '';
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

export const getNextSchedule = (schedule) => {
  const fromStation = schedule.first.schedule.from.station;
  const toStation = (schedule.second || schedule.first).schedule.to.station;
  const originalDepartAt = schedule.first.schedule.from.departAt;
  const schedules = getDaySchedule(fromStation, toStation);
  if (schedules[schedules.length - 1].first.schedule.from.departAt === originalDepartAt) return schedule;

  let nextSchedule = schedule;
  for (let i = 1; i < schedules.length; i++) {
    if (schedules[i].first.schedule.from.departAt === originalDepartAt) {
      nextSchedule = schedules[i + 1];
    }
  }
  return nextSchedule;
}

export const getPrevSchedule = (schedule) => {
  const fromStation = schedule.first.schedule.from.station;
  const toStation = (schedule.second || schedule.first).schedule.to.station;
  const originalDepartAt = schedule.first.schedule.from.departAt;
  const schedules = getDaySchedule(fromStation, toStation);
  if (schedules[0].first.schedule.from.departAt === originalDepartAt) return schedule;

  let prevSchedule = schedule;
  for (let i = 1; i < schedules.length; i++) {
    if (schedules[i].first.schedule.from.departAt === originalDepartAt) {
      prevSchedule = schedules[i - 1];
    }
  }
  return prevSchedule;
}
