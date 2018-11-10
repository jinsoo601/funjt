import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../TransactionListItem/TransactionListItem';

const transactionList = props => {
	return (
		<FlatList 
			style={styles.listContainer}
			data={props.transactions}
			renderItem={info => (
				<ListItem 
					sellerName={info.item.sellerName}
					itemName={info.item.itemName}
					itemCondition={info.item.itemCondition}
					itemPrice={info.item.itemPrice}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		width: '100%',
	}
});

export default transactionList;