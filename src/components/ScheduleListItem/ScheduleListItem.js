import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_BLACK, THEME_DISABLED } from '../UI/theme';
import { getTimeStr, getDepartAtAndArrivalAt, getTrainNumberFromSchedule } from '../../util/scheduleUtil';

const scheduleListItem = (props) => {
	const { departAt, arriveAt } = getDepartAtAndArrivalAt(props.schedule);
	const trainNumber = getTrainNumberFromSchedule(props.schedule);
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={styles.container}>
				<Icon name="schedule" size={30} color={THEME_BLACK} style={styles.leftIcon} />
				<View>
					<Text style={styles.subText}>Departure: </Text>
					<Text style={styles.text}>{getTimeStr(departAt)}</Text>
				</View>
				<Icon name="arrow-forward" size={15} color={THEME_BLACK} style={styles.middleIcon} />
				<View>
					<Text style={styles.subText}>Arrival: </Text>
					<Text style={styles.text}>{getTimeStr(arriveAt)}</Text>
				</View>
				<Text style={styles.trainNumber}>{trainNumber}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 15,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: THEME_DISABLED
	},
	text: {
		color: THEME_BLACK,
		fontWeight: 'bold'
	},
	subText: {
		fontSize: 12
	},
	leftIcon: {
		marginRight: 20
	},
	middleIcon: {
		marginLeft: 10,
		marginRight: 10
	},
	trainNumber: {
		marginLeft: 'auto',
		marginRight: 10,
		fontWeight: 'bold',
		alignSelf: 'flex-end'
	}
});

export default scheduleListItem;