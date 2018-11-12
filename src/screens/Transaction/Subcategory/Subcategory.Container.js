import React from 'react';
import { Provider } from 'react-redux';

import SubcategoryScreen from './Subcategory';
import { store } from '../../../../App';

const subcategoryScreenRedux = () => (
  <Provider store={store}><SubcategoryScreen/></Provider>
);

export default subcategoryScreenRedux;