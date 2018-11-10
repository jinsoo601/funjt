import { ADD_TRANSACTION } from './actionTypes';

export const addTransaction = (sellerName, itemName, itemCondition, itemPrice) => {
	return {
		type: ADD_TRANSACTION,
		transaction: {
			sellerName,
			itemName,
			itemCondition,
			itemPrice
		}
	};
};