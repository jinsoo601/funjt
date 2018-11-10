import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import { THEME_DARK_GREEN, THEME_WHITE } from '../theme';

const themeButton = props => {
	return (
		<TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </View>
    </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME_DARK_GREEN,
    borderRadius: 2,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: THEME_WHITE,
    fontWeight: '500'
  }
});

export default themeButton;