import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

class ScheduleDetailScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScheduleCard schedule={this.props.schedule} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingTop: 10
  }
});

export default ScheduleDetailScreen;