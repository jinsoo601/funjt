import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import { THEME_GREEN } from '../UI/theme';
import ListItem from '../TransactionListItem/TransactionListItem';

const transactionListItem = props => {
	return (
		<TouchableWithoutFeedback onPress={() => alert('item pressed. go to item detail')}>
			<View style={styles.listItemContainer}>
				<View style={styles.image}></View>
				<View>
					<Text>{props.sellerName}</Text>
					<Text>{props.itemName}</Text>
					<Text>{props.itemCondition}</Text>
					<Text>{props.itemPrice}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	listItemContainer: {
		width: "100%",
		padding: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	image: {
		marginRight: 8,
		width: 75,
		height: 75,
		borderWidth: 2,
		borderColor: THEME_GREEN
	}
});

export default transactionListItem;