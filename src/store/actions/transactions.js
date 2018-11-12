import { ADD_TRANSACTION, SELECT_CATEGORY } from './actionTypes';

export const addTransaction = (transactionData) => {
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