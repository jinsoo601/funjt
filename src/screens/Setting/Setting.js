import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';

import stations from '../../constants/stations';
import ModeButton from '../../components/ModeButton/ModeButton';
import Dropdown from '../../components/Dropdown/Dropdown';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { THEME_PRIMARY } from '../../components/UI/theme';

class SettingScreen extends Component {
  state = {
    home: null,
    work: null,
    showHomeDropdown: false,
    showWorkDropdown: false
  };

  componentDidMount() {
    AsyncStorage.getItem('funjt:Home')
      .then(value => this.setState({ home: value }))
      .catch(() => this.setState({ home: null }));

    AsyncStorage.getItem('funjt:Work')
      .then(value => this.setState({ work: value }))
      .catch(() => this.setState({ work: null }));
  }

  saveSetting = () => {
    if (!this.state.home || !this.state.work) return;
    AsyncStorage.setItem('funjt:Home', this.state.home);
    AsyncStorage.setItem('funjt:Work', this.state.work);
    Navigation.pop(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.topMargin]}>Choose your two most frequently visited stations.</Text>
        <View style={[styles.row, styles.topMargin]}>
          <View style={[styles.smallWidth, styles.alignCenter]}>
            <Text style={styles.text}>Home:</Text>
          </View>
          <ModeButton
            value={this.state.home || 'Choose your home'}
            onPress={() => this.setState(prevState => ({ showHomeDropdown: !prevState.showHomeDropdown }))}
            isActive={!!this.state.home}
            collapsed={this.state.collapsed}
            iconName="arrow-drop-down"
          />
        </View>
        <View style={[styles.row, styles.topMargin]}>
          <View style={[styles.smallWidth, styles.alignCenter]}>
            <Text style={styles.text}>Work:</Text>
          </View>
          <ModeButton
            value={this.state.work || 'Choose your work'}
            onPress={() => this.setState(prevState => ({ showWorkDropdown: !prevState.showWorkDropdown }))}
            isActive={!!this.state.work}
            collapsed={this.state.collapsed}
            iconName="arrow-drop-down"
          />
        </View>
        <View style={[styles.topMargin, styles.alignCenter]}>
          <SubmitButton
            title="Save settings"
            onPress={this.saveSetting}
            style={styles.submitButton}
            collapsed={this.state.collapsed}
          />
        </View>
        <View style={styles.homeDropdown}>
          {
            this.state.showHomeDropdown &&
            <Dropdown
              onSelect={option => this.setState({ home: option, showHomeDropdown: false })}
              options={Object.values(stations)}
            />
          }
        </View>
        <View style={styles.workDropdown}>
          {
            this.state.showWorkDropdown &&
            <Dropdown
              onSelect={option => this.setState({ work: option, showWorkDropdown: false })}
              options={Object.values(stations)}
            />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: THEME_PRIMARY
  },
  smallWidth: {
    width: '35%'
  },
  topMargin: {
    marginTop: 20
  },
  alignCenter: {
    alignItems: 'center'
  },
  submitButton: {
    paddingLeft: 20, 
    paddingRight: 20,
    marginTop: 5
  },
  homeDropdown: {
    position: 'absolute',
    top: 120,
    width: '100%',
    paddingLeft: '35%'
  },
  workDropdown: {
    position: 'absolute',
    top: 200,
    width: '100%',
    paddingLeft: '35%'
  }
})

export default SettingScreen;