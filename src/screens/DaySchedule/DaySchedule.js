import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Keyboard } from 'react-native';

import { Hoshi } from 'react-native-textinput-effects';

import { THEME_PRIMARY, THEME_SECONDARY, THEME_WHITE } from '../../components/UI/theme';

class DayScheduleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi this will be day screen.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default DayScheduleScreen;