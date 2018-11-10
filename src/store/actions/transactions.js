import { ADD_TRANSACTION } from './actionTypes';

export const addTransaction = (transactionData) => {
	return {
		type: ADD_TRANSACTION,
		transaction: transactionData
	};
};