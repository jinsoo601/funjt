import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';

import FilterButton from '../../components/UI/FilterButton/FilterButton';
import RequestButton from '../../components/UI/RequestButton/RequestButton';

class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterBarContainer}>
          <FilterButton onPress={() => alert('filter')} />
          <RequestButton onPress={() => alert('request')} />
        </View>
        <Text>This is your main page.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});

const mapStateToProps = state => {
  return {
    transactions: state.transactions.transactions
  };
};

export default connect(mapStateToProps, null)(FeedScreen);