import React, {Component} from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { THEME_BACKGROUND } from '../../../components/UI/theme';
import { selectCategory } from '../../../store/actions/index';
import CategorySquare from '../../../components/CategorySquare/CategorySquare';
import { navigateAfterCategorySelection } from '../../CustomTopBarButtons/navigationActions';

const sideLength = Dimensions.get("window").width * 0.4;

class CategoryScreen extends Component {
  onSelectCategory = category => {
    navigateAfterCategorySelection(category);
    this.props.onSelectCategory(category);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.categorySquareRow}>
          <CategorySquare title="Electronics" onPress={this.onSelectCategory} sideLength={sideLength} />
          <CategorySquare title="Books" onPress={this.onSelectCategory} sideLength={sideLength} />
        </View>
        <View style={styles.categorySquareRow}>
          <CategorySquare title="Housing" onPress={this.onSelectCategory} sideLength={sideLength} />
          <CategorySquare title="Others" onPress={this.onSelectCategory} sideLength={sideLength} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_BACKGROUND
  },
  categorySquareRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Dimensions.get("window").width * 0.07,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onSelectCategory: category => dispatch(selectCategory(category))
  };
};

export default connect(null, mapDispatchToProps)(CategoryScreen);