import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_SECONDARY, THEME_WHITE } from '../UI/theme';

const collapseButton = props => {
	const iconName = props.collapsed ? 'arrow-drop-down' : 'arrow-drop-up';
	const content = (
		<View style={[styles.button, props.style]}>
			<Icon name={iconName} size={30} color={THEME_WHITE} />
		</View>
	);
	const Button = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

	return (
		<Button onPress={props.onPress} activeOpacity={0.6}>{content}</Button>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: THEME_SECONDARY,
		paddingLeft: 10,
		paddingRight: 10,
		marginRight: 10,
		marginBottom: 10,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
});

export default collapseButton;