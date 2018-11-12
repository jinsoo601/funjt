import React from 'react';
import { Provider } from 'react-redux';

import CategoryScreen from './Category';
import { store } from '../../../../App';

const categoryScreenRedux = () => (
  <Provider store={store}><CategoryScreen/></Provider>
);

export default categoryScreenRedux;