import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import { THEME_BLUE, THEME_WHITE } from '../theme';

const requestButton = props => {
	return (
		<TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Request Item!</Text>
      </View>
    </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: THEME_BLUE,
    borderRadius: 3,
    paddingLeft: 9,
    paddingRight: 9,
    height: 25,
  },
  buttonText: {
    color: THEME_WHITE
  }
});

export default requestButton;