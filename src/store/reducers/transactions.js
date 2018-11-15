import { ADD_TRANSACTION, SELECT_CATEGORY, SELECT_ITEM_NAME } from '../actions/actionTypes';

const initialState = {
	transactions: [
		{
	    sellerName: 'Yubin Kim',
	    itemName: 'iPhone6',
	    itemCondition: 'Good',
	    itemPrice: '150.00',
	    key: `${Math.random()}`
	  },
	],
	newTransaction: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.concat(action.transaction)
			};
		case SELECT_CATEGORY:
			return {
				...state,
				newTransaction: {
					...state.newTransaction,
					category: action.category
				}
			};
		case SELECT_ITEM_NAME:
			return {
				...state,
				newTransaction: {
					...state.newTransaction,
					itemName: action.itemName
				}
			};
		default:
			return state;
	}
};

export default reducer;