import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import { THEME_PRIMARY, THEME_WHITE } from '../UI/theme';

const ModeButton = props => (
 <TouchableWithoutFeedback onPress={props.onPress}>
    <View 
      style={[
        props.collapsed ? null : styles.button, 
        props.isActive ? styles.buttonActive : null
      ]}
    >
      <Text 
        style={[
          styles.buttonText,
          props.isActive ? styles.buttonActiveText : null
        ]}
      >
        {props.value}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
	button: {
    borderWidth: 2,
    borderColor: THEME_PRIMARY,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    flex: 1
  },
  buttonActive: {
    backgroundColor: THEME_PRIMARY
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: THEME_PRIMARY
  },
  buttonActiveText: {
    color: THEME_WHITE
  }
});

export default ModeButton;