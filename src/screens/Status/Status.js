import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Keyboard } from 'react-native';

import { Hoshi } from 'react-native-textinput-effects';

import { THEME_PRIMARY, THEME_SECONDARY, THEME_WHITE } from '../../components/UI/theme';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import StatusListItem from '../../components/StatusListItem/StatusListItem';
import { parseStatus } from './Status.Function';
import { openSettingScreen } from '../../util/navUtil';

class StatusScreen extends Component {
  static options () {
    return {
      topBar: {
        rightButtons: [{
          id: 'openSetHomeScreen',
          component: {
            name: 'funjt.SettingButton',
            passProps: {
              onPress: () => openSettingScreen('funjt.StatusScreen')
            }
          }
        }],
      }
    };
  }
  
  state = {
    trainNumber: null,
    status: []
  };

  onChangeText = value => {
    this.setState({
      trainNumber: value,
      isLoading: false,
      status: []
    });
  }

  onCheckStatus = () => {
    if (!/^[0-9]{4}$/.test(this.state.trainNumber)) return;
    this.setState({
      isLoading: true
    });
    fetch(`https://dv.njtransit.com/webdisplay/train_stops.aspx?sid=NA&train=${this.state.trainNumber}`)
      .then(res => {
        const parsedRes = parseStatus(res);
        this.setState({
          isLoading: false,
          status: parsedRes
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false,
          status: []
        });
      });
    Keyboard.dismiss();
  }

  renderListItem = (info) => {
    return (
      <StatusListItem 
        stationInfo={info.item} 
        isLastStation={parseInt(info.item.key) === this.state.status.length - 1} 
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Hoshi 
            label={'Your Train # (XXXX)'} 
            borderColor={THEME_PRIMARY}
            value={this.state.trainNumber}
            onChangeText={this.onChangeText}
            style={styles.input}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="numeric"
          />
          <SubmitButton title="Check" onPress={this.onCheckStatus} style={styles.button} />
        </View>
        <View style={styles.body}>
          {this.state.isLoading && <ActivityIndicator />}
          <FlatList 
            data={this.state.status}
            renderItem={this.renderListItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    flex: 1
  },
  button: {
    marginLeft: 10,
  },
  body: {
    flex: 1,
    marginTop: 30
  }
});

export default StatusScreen;