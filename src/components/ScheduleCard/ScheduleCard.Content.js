import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_PRIMARY, THEME_SECONDARY, THEME_WHITE } from '../UI/theme';
import { getTimeStr } from '../../screens/Schedule/scheduleUtil';

const scheduleCardContent = props => (
	<View style={styles.container}>
		<View style={styles.header}>
			<Icon name={props.schedule.first.type === 'TRAIN' ? 'train' : 'directions-bus'} size={20} color={'black'} />
			<Text style={styles.typeText}>{props.schedule.first.type}</Text>
			<Text style={styles.description}>
				{` ${props.schedule.first.schedule.from.station} to ${props.schedule.first.schedule.to.station}`}
			</Text>
			{props.schedule.first.type === 'TRAIN' && <Text style={styles.trainNumber}>{`#${props.schedule.first.schedule.trainNumber}`}</Text>}
		</View>
		<View style={[styles.timeText, { marginBottom: 10}]}>
			<Text>Departure: {getTimeStr(props.schedule.first.schedule.from.departAt)}</Text>
    	<Text>Arrival: {getTimeStr(props.schedule.first.schedule.to.departAt)}</Text>
		</View>
		{
			props.schedule.second && (
				<React.Fragment>
					<View style={styles.header}>
						<Icon name={props.schedule.second.type === 'TRAIN' ? 'train' : 'directions-bus'} size={20} color={'black'} />
						<Text style={styles.typeText}>{props.schedule.second.type}</Text>
						<Text style={styles.description}>
							{props.schedule.second.type === 'TRAIN' ? ' Princeton Junction to  NY Penn' : ' Princeton Junction to Princeton'}
						</Text>
						{props.schedule.second.type === 'TRAIN' && <Text style={styles.trainNumber}>{`#${props.schedule.second.schedule.trainNumber}`}</Text>}
					</View>
			    <View style={styles.timeText}>
			    	<Text>Departure: {getTimeStr(props.schedule.second.schedule.departAt)}</Text>
			    	<Text>Arrival: {getTimeStr(props.schedule.second.schedule.arriveAt)}</Text>
			    </View>
		    </React.Fragment>
			)
		}
  </View>
);

const styles = StyleSheet.create({
	container: {
		padding: 13,
		borderWidth: 2,
		borderColor: THEME_PRIMARY
	},
	header: {
		flexDirection: 'row',
		paddingBottom: 5,
		borderBottomWidth: 2,
		borderColor: THEME_SECONDARY,
		marginBottom: 10
	},
	typeText: {
		alignSelf: 'flex-end',
		marginLeft: 4,
		marginRight: 4
	},
	description: {
		fontSize: 10,
		alignSelf: 'flex-end'
	},
	timeText: {
		marginLeft: 24,
		height: 50,
		justifyContent: 'space-evenly'
	},
	trainNumber: {
		marginLeft: 'auto',
		fontSize: 12,
		alignSelf: 'flex-end',
	}
});

export default scheduleCardContent;