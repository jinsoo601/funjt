import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_PRIMARY, THEME_WHITE } from '../UI/theme';
import { getTimeStr } from '../../screens/Schedule/scheduleUtil';

const scheduleCardHeader = props => (
	<View style={styles.container}>
		<Icon name="schedule" size={30} color={THEME_WHITE} style={styles.leftIcon} />
		<View>
			<Text style={styles.subText}>Departure: </Text>
			<Text style={styles.text}>{getTimeStr(props.departAt)}</Text>
		</View>
		<Icon name="arrow-forward" size={15} color={THEME_WHITE} style={styles.middleIcon} />
		<View>
			<Text style={styles.subText}>Arrival: </Text>
			<Text style={styles.text}>{getTimeStr(props.arriveAt)}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: THEME_PRIMARY,
		alignItems: 'center',
		padding: 7,
		paddingLeft: 15
	},
	text: {
		color: THEME_WHITE,
		fontWeight: 'bold'
	},
	subText: {
		color: THEME_WHITE,
		fontSize: 12
	},
	leftIcon: {
		marginRight: 20
	},
	middleIcon: {
		marginLeft: 10,
		marginRight: 10
	},
});

export default scheduleCardHeader;