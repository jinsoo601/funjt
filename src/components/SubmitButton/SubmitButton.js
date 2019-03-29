import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import { THEME_SECONDARY, THEME_WHITE } from '../UI/theme';

const submitButton = props => {
	const content = (
		<View 
			style={[
				props.collapsed ? null : styles.button, 
				props.style
			]}
		>
			<Text style={styles.buttonText}>{props.title}</Text>
		</View>
	);
	const Button = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

	return (
		<Button onPress={props.onPress} activeOpacity={0.6}>{content}</Button>
	);
}

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: THEME_SECONDARY,
		backgroundColor: THEME_SECONDARY,
		padding: 10
	},
	buttonText: {
		color: THEME_WHITE,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

export default submitButton;