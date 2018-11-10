import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_GREEN } from '../theme';

const filterButton = props => {
	return (
		<TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Icon color={THEME_GREEN} name="filter-list" size={20} />
        <Text style={styles.buttonText}>Filters</Text>
      </View>
    </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: THEME_GREEN,
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 6,
    paddingRight: 6,
    height: 25,
  },
  buttonText: {
    color: THEME_GREEN,
  },
});

export default filterButton;