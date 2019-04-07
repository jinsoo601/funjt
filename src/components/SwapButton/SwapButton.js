import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { THEME_WHITE, THEME_SECONDARY } from '../UI/theme';

const SwapButton = props => (
  <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
    <View style={styles.button}>
      <Icon name="swap-horiz" color={THEME_WHITE} size={20} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: THEME_SECONDARY
  }
});

export default SwapButton;
