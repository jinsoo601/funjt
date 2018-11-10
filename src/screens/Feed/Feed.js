import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import { THEME_GREEN, THEME_BLUE, THEME_WHITE } from '../../components/UI/theme';
import FilterButton from '../../components/UI/FilterButton/FilterButton';
import RequestButton from '../../components/UI/RequestButton/RequestButton';
import openSideMenu from '../CustomTopBarButtons/openSideMenu';
import TransactionList from '../../components/TransactionList/TransactionList';

class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterBarContainer}>
          <FilterButton onPress={() => alert('filter')} />
          <RequestButton onPress={() => alert('request')} />
        </View>
        <TransactionList transactions={this.props.transactions} />
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