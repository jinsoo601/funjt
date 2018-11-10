import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { THEME_WHITE } from '../../components/UI/theme';
import { openSideMenu, beginTransaction } from '../CustomTopBarButtons/navigationActions';
import FeedScreen from './Feed';
import { store } from '../../../App';

class FeedScreenRedux extends Component {
	static options () {
    return {
      topBar: {
        title: {
          text: 'Feed screen',
          color: THEME_WHITE,
          alignment: 'center'
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
        rightButtons: [{
          id: 'goToSellScreen',
          component: {
            name: 'cappo.BeginTransactionButton',
            passProps: {
              onPress: beginTransaction
            }
          }
        }],
      }
    };
  }

  render () {
    return <Provider store={store}><FeedScreen/></Provider>
  }
}

export default FeedScreenRedux;