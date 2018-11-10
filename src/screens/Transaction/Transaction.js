import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { connect } from 'react-redux';

import { addTransaction } from '../../store/actions/index';

class TransactionScreen extends Component {
  onTransactionSubmit = () => {
    this.props.onAddTransaction({
      sellerName: 'Jinsoo',
      itemName: 'MacBook Pro',
      itemCondition: 'New',
      itemPrice: '2000.00',
      key: `${Math.random()}`
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is transaction screen.</Text>
        <Button title='Add Transaction' onPress={this.onTransactionSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const mapDispatchToProps = dispatch => {
  return {
    onAddTransaction: transactionData => dispatch(addTransaction(transactionData))
  };
};

export default connect(null, mapDispatchToProps)(TransactionScreen);