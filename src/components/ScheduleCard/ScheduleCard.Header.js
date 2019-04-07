import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_PRIMARY, THEME_SECONDARY, THEME_WHITE } from '../UI/theme';
import { getTimeStr } from '../../util/scheduleUtil';
import { goToStatusScreen } from '../../util/navUtil';

const scheduleCardHeader = (props) => {
	return (
		<View style={[styles.row, styles.alignCenter, styles.container]}>
			<View style={[styles.row, styles.alignCenter]}>
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
			<TouchableOpacity onPress={goToStatusScreen} activeOpacity={0.6}>
				<View style={[styles.statusButton, styles.alignCenter]}>
					<Icon name="train" size={20} color={THEME_WHITE} />
					<Text style={[styles.text, styles.buttonText]}>Status</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: THEME_PRIMARY,
		padding: 7,
		paddingLeft: 15,
		justifyContent: 'space-between'
	},
	row: {
		flexDirection: 'row'
	},
	alignCenter: {
		alignItems: 'center'
	},
	text: {
		color: THEME_WHITE,
		fontWeight: 'bold'
	},
	subText: {
		color: THEME_WHITE,
		fontSize: 12
	},
	buttonText: {
		fontSize: 10
	},
	leftIcon: {
		marginRight: 20
	},
	middleIcon: {
		marginLeft: 10,
		marginRight: 10
	},
	statusButton: {
		backgroundColor: THEME_SECONDARY,
		borderRadius: 3,
		padding: 5
	}
});

export default scheduleCardHeader;
