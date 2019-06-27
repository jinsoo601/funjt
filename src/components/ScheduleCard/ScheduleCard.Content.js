import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_PRIMARY, THEME_SECONDARY, THEME_WHITE } from '../UI/theme';
import { getTimeStr } from '../../util/scheduleUtil';

const getIconName = type => (type === 'TRAIN' ? 'train' : 'directions-bus');
const getTypeStr = type => (type === 'TRAIN' ? 'TRAIN' : 'DINKY');

const scheduleCardContent = ({ schedule }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name={getIconName(schedule.first.type)} size={20} color={'black'} />
				<Text style={styles.typeText}>{getTypeStr(schedule.first.type)}</Text>
				<Text style={styles.description}>
					{` ${schedule.first.schedule.from.station} to ${schedule.first.schedule.to.station}`}
				</Text>
				{schedule.first.type === 'TRAIN' && <Text style={styles.trainNumber}>{`#${schedule.first.schedule.trainNumber}`}</Text>}
			</View>
			<View style={[styles.timeText, { marginBottom: 10 }]}>
				<Text>Departure: {getTimeStr(schedule.first.schedule.from.departAt)}</Text>
	    	<Text>Arrival: {getTimeStr(schedule.first.schedule.to.departAt)}</Text>
			</View>
			{
				schedule.second && (
					<React.Fragment>
						<View style={styles.header}>
							<Icon name={getIconName(schedule.second.type)} size={20} color={'black'} />
							<Text style={styles.typeText}>{getTypeStr(schedule.second.type)}</Text>
							<Text style={styles.description}>
								{` ${schedule.second.schedule.from.station} to ${schedule.second.schedule.to.station}`}
							</Text>
							{schedule.second.type === 'TRAIN' && <Text style={styles.trainNumber}>{`#${schedule.second.schedule.trainNumber}`}</Text>}
						</View>
				    <View style={styles.timeText}>
				    	<Text>Departure: {getTimeStr(schedule.second.schedule.from.departAt)}</Text>
				    	<Text>Arrival: {getTimeStr(schedule.second.schedule.to.departAt)}</Text>
				    </View>
			    </React.Fragment>
				)
			}
	  </View>
  );
};

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