import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_PRIMARY, THEME_SECONDARY, THEME_WHITE } from '../UI/theme';
import Header from './ScheduleCard.Header';
import Content from './ScheduleCard.Content';
import { getNextSchedule, getPrevSchedule, getDepartAtAndArrivalAt, getTrainNumberFromSchedule } from '../../util/scheduleUtil';

class ScheduleCard extends Component {
	state = {
		initialX: 0,
		schedule: this.props.schedule,
		opacAnim: new Animated.Value(1)
	}

	onTouchStart = (event) => {
		Animated.timing(
			this.state.opacAnim,
			{
				toValue: 0.2,
				duration: 300,
				useNativeDriver: true
			}
		).start();

		this.setState({
			initialX: event.nativeEvent.pageX
		});

		return true;
	}

	onTouchEnd = (event) => {
		if (event.nativeEvent.pageX < this.state.initialX) this.getNextSchedule();
		else if (event.nativeEvent.pageX > this.state.initialX) this.getPrevSchedule();

		Animated.timing(
			this.state.opacAnim,
			{
				toValue: 1,
				duration: 300,
				useNativeDriver: true
			}
		).start();
	}

	getNextSchedule = () => {
		this.setState(prevState => ({
			schedule: getNextSchedule(prevState.schedule)
		}));
	}

	getPrevSchedule = () => {
		this.setState(prevState => ({
			schedule: getPrevSchedule(prevState.schedule)
		}));
	}

	render() {
		// for header
		const { departAt, arriveAt } = getDepartAtAndArrivalAt(this.state.schedule);
		const trainNumber = getTrainNumberFromSchedule(this.state.schedule).slice(1);

		return (
			<Animated.View
				onStartShouldSetResponder={this.onTouchStart}
				onResponderRelease={this.onTouchEnd}
				style={{
					...styles.container,
					opacity: this.state.opacAnim
				}}
			>
				<Header
					departAt={departAt}
					arriveAt={arriveAt}
					trainNumber={trainNumber}
					screenId={this.props.screenId}
				/>
				<Content schedule={this.state.schedule} />
      </Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		marginRight: 10,
	},
});

export default ScheduleCard;