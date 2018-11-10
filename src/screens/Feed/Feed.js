import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { THEME_GREEN, THEME_BLUE, THEME_WHITE } from '../../components/UI/theme';
import FilterButton from '../../components/UI/FilterButton/FilterButton';
import RequestButton from '../../components/UI/RequestButton/RequestButton';
import openSideMenu from '../CustomTopBarButtons/openSideMenu';

class FeedScreen extends Component {
  static options () {
    return {
      topBar: {
        title: {
          text: 'Feed screen'
        },
        leftButtons: [{
          id: 'toggleSideMenu',
          component: {
            name: 'cappo.SideMenuButton',
            passProps: {
              onPress: openSideMenu
            }
          }
        }],
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterBarContainer}>
          <FilterButton onPress={() => alert('filter')} />
          <RequestButton onPress={() => alert('request')} />
        </View>
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

export default FeedScreen;