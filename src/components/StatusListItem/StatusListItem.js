import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_PRIMARY, THEME_SECONDARY, THEME_DISABLED } from '../UI/theme';

const statusListItem = props => {
	if (notValidInfo(props.stationInfo)) {
		return (
			<View style={styles.errorContainer}>
				<Text style={styles.errorMessage}>The train number is not found. Sorry!</Text>
			</View>
		);
	}

	return (
		<View>
	    <View style={[styles.infoContainer, props.isLastStation ? { marginBottom: 30 } : null]}>
		    {
		    	props.stationInfo.status === 'Departed' 
		    	? <Icon name="check-box" size={25} color={THEME_SECONDARY} /> 
		    	: <View style={styles.notDeparted}></View>
		    }
		    <Text style={styles.stationName}>{props.stationInfo.station}</Text>
		    <Text style={styles.subText}>{props.stationInfo.status || props.stationInfo.departureTime}</Text>
	    </View>
		</View>
	);
}

const notValidInfo = stationInfo => {
	return stationInfo.station.includes('www.njtransit.com');
}

const styles = StyleSheet.create({
	infoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 15,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: THEME_DISABLED
	},
	errorContainer: {
		margin: 30,
	},
	errorMessage: {
		fontSize: 16,
		fontWeight: 'bold',
		color: THEME_PRIMARY
	},
	notDeparted: {
		width: 20,
  	height: 20,
  	borderWidth: 2,
  	borderRadius: 3,
  	borderColor: THEME_SECONDARY,
  	marginLeft: 2
	},
	stationName: {
		fontSize: 16,
		fontWeight: 'bold',
		marginLeft: 15
	},
	subText: {
		fontSize: 12,
		paddingTop: 4,
		marginLeft: 15
	},
});

export default statusListItem;