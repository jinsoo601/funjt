import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native'; 

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_DARK_GREEN, THEME_WHITE } from '../../components/UI/theme';

const beginTransactionButton = props => {
	return (
		<TouchableHighlight 
			onPress={props.onPress}
			underlayColor={THEME_DARK_GREEN}
			style={styles.button}
		>
			<View>
				<Icon name="camera" color={THEME_WHITE} size={30} />
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 20,
		padding: 4
	}
});

export default beginTransactionButton;