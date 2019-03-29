import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, Dimensions } from 'react-native';

import { THEME_PRIMARY, THEME_WHITE } from '../UI/theme';
import ModeButton from '../ModeButton/ModeButton';

const Dropdown = (props) => {
  const options = props.options.map(option => (
    <TouchableHighlight
      onPress={() => props.onSelect(option)}
      key={option}
      underlayColor={THEME_PRIMARY}
    >
      <View style={styles.option}>
        <Text style={styles.optionText}>{option}</Text>
      </View>
    </TouchableHighlight>
  ));

  return (
    <View style={styles.container}>
      <ScrollView style={styles.dropdown}>
        {options}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  dropdown: {
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: THEME_WHITE,
    borderWidth: 2,
    borderColor: THEME_PRIMARY,
    borderRadius: 5,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontWeight: 'bold',
    color: THEME_PRIMARY
  }
});

export default Dropdown;