import React from 'react';
import { View, TouchableOpacity } from 'react-native'; 

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_WHITE } from '../UI/theme';

const SettingButton = props => {
  return (
    <TouchableOpacity 
      onPress={props.onPress}
    >
      <View>
        <Icon name="settings" color={THEME_WHITE} size={30} />
      </View>
    </TouchableOpacity>
  );
}

export default SettingButton;
