import React, { Component } from 'react';
import { Provider } from 'react-redux';

import openSideMenu from '../CustomTopBarButtons/openSideMenu';
import FeedScreen from './Feed';
import { store } from '../../../App';

class FeedScreenRedux extends Component {
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
        rightButtons: [{
          id: 'goToSellScreen',
          component: {
            name: 'cappo.BeginTransactionButton',
            passProps: {
              onPress: () => alert('Begin transaction')
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