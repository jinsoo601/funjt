import { ADD_TRANSACTION, SELECT_CATEGORY, SELECT_ITEM_NAME } from './actionTypes';

export const addTransaction = transactionData => {
	return {
		type: ADD_TRANSACTION,
		transaction: transactionData
	};
};

export const selectCategory = category => {
	return {
		type: SELECT_CATEGORY,
		category: category
	};
};

export const selectItemName = itemName => {
	return {
		type: SELECT_ITEM_NAME,
		itemName: itemName
	};
};