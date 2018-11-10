import React from 'react';
import { Provider } from 'react-redux';

import TransactionScreen from './Transaction';
import { store } from '../../../App';

const transactionScreenRedux = () => (
  <Provider store={store}><TransactionScreen/></Provider>
);

export default transactionScreenRedux;