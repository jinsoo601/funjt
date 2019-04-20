import React from 'react';
import { StyleSheet, Text } from 'react-native';

const HolidayWarning = () => (
  <Text style={styles.text}>⚠ Holidays may affect the schedule.</Text>
);

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    color: 'gray',
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 8
  }
});

export default HolidayWarning;
