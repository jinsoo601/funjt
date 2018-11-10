import { ADD_TRANSACTION } from '../actions/actionTypes';

const initialState = {
	transactions: [
		{
	    sellerName: 'Yubin Kim',
	    itemName: 'iPhone6',
	    itemCondition: 'Good',
	    itemPrice: '150.00',
	    key: `${Math.random()}`
	  },
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.concat(action.transaction)
			};
		default:
			return state;
	}
};

export default reducer;