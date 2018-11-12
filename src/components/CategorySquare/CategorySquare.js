import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

import { THEME_WHITE, THEME_DISABLED, THEME_TEXT } from '../UI/theme';

const categorySquare = props => (
	<TouchableOpacity onPress={() => props.onPress(props.title)}>
		<View 
			style={[
				styles.container,
				{
					width: props.sideLength,
					height: props.sideLength 
				},
				props.style
			]}
		>
			<View style={styles.image}></View>
			<Text style={[styles.title, props.textColor]}>{props.title}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: THEME_DISABLED,
		backgroundColor: THEME_WHITE
	},
	image: {
		flex: 1
	},
	title: {
		alignSelf: 'center',
		marginBottom: 10,
		color: THEME_TEXT
	}
});

export default categorySquare;