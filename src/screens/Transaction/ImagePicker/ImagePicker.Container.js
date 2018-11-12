import React from 'react';
import { Provider } from 'react-redux';

import ImagePickerScreen from './ImagePicker';
import { store } from '../../../../App';

const imagePickerScreenRedux = () => (
  <Provider store={store}><ImagePickerScreen/></Provider>
);

export default imagePickerScreenRedux;