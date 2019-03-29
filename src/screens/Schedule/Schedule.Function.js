import { Navigation } from 'react-native-navigation';
import { LayoutAnimation } from 'react-native';

import { THEME_WHITE } from '../../components/UI/theme';
import stations from '../../constants/stations';
import { SUN, MON, TUE, WED, THU, FRI, SAT } from '../../constants/days';
import { busToPrinceton, busToJunction } from '../../assets/busSchedule';
import { trainToPrinceton, trainToNewYork } from '../../assets/trainSchedule';

export const getASAPSchedule = (destination, time = null) => {
	const now = new Date();
	let day = now.getDay();
	const currentTime = !time ? now.getHours() * 100 + now.getMinutes() : time;

	const schedule = {};
	if (destination === 'PRINCETON') {
		const soonestTrainToPrinceton = getSoonestSchedule(trainToPrinceton, day, currentTime);
		
		let trainArrivalTime = soonestTrainToPrinceton.arriveAt;
		if (trainArrivalTime >= 2400) {
			day++;
			trainArrivalTime -= 2400;
		}
		if (day > 6) day = SUN;
		const soonestBusToPrinceton = getSoonestSchedule(busToPrinceton, day, trainArrivalTime);
		
		schedule.first = {
			type: 'TRAIN',
			schedule: soonestTrainToPrinceton
		};
		schedule.second = {
			type: 'BUS',
			schedule: soonestBusToPrinceton
		};
	} else {
		const soonestBusToJunction = getSoonestSchedule(busToJunction, day, currentTime);
		const busArrivalTime = soonestBusToJunction.arriveAt;
		const soonestTrainToNewYork = getSoonestSchedule(trainToNewYork, day, busArrivalTime);

		schedule.first = {
			type: 'BUS',
			schedule: soonestBusToJunction
		};
		schedule.second = {
			type: 'TRAIN',
			schedule: soonestTrainToNewYork
		};
	}
	return [schedule];
};

export const getDaySchedule = (destination) => {
	const now = new Date();
	let day = now.getDay();
	const currentTime = now.getHours() * 100 + now.getMinutes();

	let schedules = [];
	if (destination === 'PRINCETON') {
		schedules = trainToPrinceton[day].map(schedule => (
			{
				first: {
					type: 'TRAIN',
					schedule
				}
			}
		));
		schedules.forEach(schedule => {
			const trainArrivalTime = schedule.first.schedule.arriveAt;
			schedule.second = {
				type: 'BUS',
				schedule: getSoonestSchedule(busToPrinceton, day, trainArrivalTime)
			};
		});
	} else {
		schedules = busToJunction[day].map(schedule => (
			{
				first: {
					type: 'BUS',
					schedule
				}	
			}
		));
		schedules.forEach(schedule => {
			const busArrivalTime = schedule.first.schedule.arriveAt;
			schedule.second = {
				type: 'TRAIN',
				schedule: getSoonestSchedule(trainToNewYork, day, busArrivalTime)
			};
		});
	}

	return schedules;
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
	let nextSchedule = null;
	if (schedule.first.type === 'TRAIN') {
		nextSchedule = getASAPSchedule('PRINCETON', schedule.first.schedule.departAt + 1)[0];
	} else {
		nextSchedule = getASAPSchedule('NEW YORK', schedule.first.schedule.departAt + 1)[0];
	}
	return nextSchedule;
}

export const getPrevSchedule = schedule => {
	let prevSchedule = null;
	const today = new Date().getDay();
	const todaySchedules = schedule.first.type === 'TRAIN' ? trainToPrinceton[today] : busToJunction[today];

	const prevIndex = todaySchedules.findIndex(s => s.departAt === schedule.first.schedule.departAt) - 1;
	if (prevIndex < 0) return schedule;

	const destination = schedule.first.type === 'TRAIN' ? 'PRINCETON' : 'NEW YORK';
	const prevTime = todaySchedules[prevIndex].departAt - 1;

	prevSchedule = getASAPSchedule(destination, prevTime)[0];
	return prevSchedule;
}

const getSoonestSchedule = (schedules, day, currentTime) => {
	let schedule = null;
	const today = day > 6 ? SUN : day;
	const todaySchedules = schedules[today];
	for (let i = 0, len = todaySchedules.length; i < len; i++) {
		if (todaySchedules[i].departAt > currentTime) {
			schedule = todaySchedules[i];
			break;
		}
	}
	if (!schedule) {
		schedule = getSoonestSchedule(schedules, day + 1, currentTime - 2400);
	}
	return schedule;
}