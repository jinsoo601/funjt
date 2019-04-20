import React, {Component} from 'react';
import { Text, View, FlatList, LayoutAnimation, NativeModules, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';

import styles from './Schedule.Style';
import stations from '../../constants/stations';
import ModeButton from '../../components/ModeButton/ModeButton';
import Dropdown from '../../components/Dropdown/Dropdown';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import ScheduleListItem from '../../components/ScheduleListItem/ScheduleListItem';
import CollapseButton from '../../components/CollapseButton/CollapseButton';
import SwapButton from '../../components/SwapButton/SwapButton';
import HolidayWarning from '../../components/HolidayWarning/HolidayWarning';
import { getASAPSchedule, getDaySchedule, getTrainNumberFromSchedule } from '../../util/scheduleUtil';
import { getCustomLayoutSpring } from '../../util/layoutUtil';
import { openScheduleDetail, openSettingScreen } from '../../util/navUtil';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const CustomLayoutSpring = getCustomLayoutSpring();

class ScheduleScreen extends Component {
  static options () {
    return {
      topBar: {
        rightButtons: [{
          id: 'openSetHomeScreen',
          component: {
            name: 'funjt.SettingButton',
            passProps: {
              onPress: () => openSettingScreen('funjt.ScheduleScreen')
            }
          }
        }],
      }
    };
  }

  state = {
    from: null,
    to: null,
    scheduleType: 'ASAP',
    scheduleList: [],
    collapsed: false,
    height: 238,
    showEmptyState: false
  };

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
    AsyncStorage.getItem('funjt:Home')
      .then(value => this.setState({ from: value, asyncFrom: value }))
      .catch(() => this.setState({ from: null, asyncFrom: null }));

    AsyncStorage.getItem('funjt:Work')
      .then(value => this.setState({ to: value, asyncTo: value }))
      .catch(() => this.setState({ to: null, asyncTo: null }));
  }

  componentDidAppear() {
    AsyncStorage.getItem('funjt:Home')
      .then(value => {
        if (value !== this.state.asyncFrom) {
          this.setState({ from: value, asyncFrom: value });
        }
      })
      .catch(err => console.log(err));

    AsyncStorage.getItem('funjt:Work')
      .then(value => {
        if (value !== this.state.asyncTo) {
          this.setState({ to: value, asyncTo: value });
        }
      })
      .catch(err => console.log(err));
  }

  onGetSchedule = () => {
    if (!this.state.from || !this.state.to) return;
    let scheduleList = null;

    if (this.state.scheduleType === 'ASAP') {
      scheduleList = getASAPSchedule(this.state.from, this.state.to);
    } else {
      scheduleList = getDaySchedule(this.state.from, this.state.to);
    }

    this.setState({ scheduleList, showEmptyState: !scheduleList.length });
  }

  renderListItem = (info) => {
    if (this.state.scheduleList.length === 1) {
      return <ScheduleCard schedule={info.item} screenId="funjt.ScheduleScreen" />
    } else {
      return <ScheduleListItem schedule={info.item} onPress={() => openScheduleDetail(info.item, 'funjt.ScheduleScreen')} />
    }
  }

  toggle = () => {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    this.setState(prevState => {
      return {
        height: prevState.collapsed ? 238 : 0,
        collapsed: !prevState.collapsed,
        showFromDropdown: false,
        showToDropdown: false 
      }
    });
  }

  swap = () => {
    this.setState(prevState => {
      return {
        from: prevState.to,
        to: prevState.from
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <HolidayWarning />
        <View style={styles.collapseButtonContainer}>
          <CollapseButton 
            collapsed={this.state.collapsed}
            onPress={this.toggle} 
          />
        </View>
        <View 
          style={{ height: this.state.height }}
        >
          <Text style={styles.modeButtonLabel}>Where are you going today?</Text>
          <View style={styles.row}>
            <ModeButton
              value={this.state.from || 'From'}
              onPress={() => this.setState(prevState => ({ showFromDropdown: !prevState.showFromDropdown }))}
              isActive={!!this.state.from}
              collapsed={this.state.collapsed}
              iconName="arrow-drop-down"
            />
            {!this.state.collapsed && <SwapButton onPress={this.swap} />}
            <ModeButton
              value={this.state.to || 'To'}
              onPress={() => this.setState(prevState => ({ showToDropdown: !prevState.showToDropdown }))}
              isActive={!!this.state.to}
              collapsed={this.state.collapsed}
              iconName="arrow-drop-down"
            />
          </View>
          <Text style={[styles.modeButtonLabel, { marginTop: 10 }]}>What schedule do you want to see?</Text>
          <View style={styles.row}>
            <ModeButton
              value='ASAP'
              onPress={() => this.setState({ scheduleType: 'ASAP' })}
              isActive={this.state.scheduleType === 'ASAP'}
              collapsed={this.state.collapsed}
            />
            <ModeButton
              value='Of the Day'
              onPress={() => this.setState({ scheduleType: 'Of the Day' })}
              isActive={this.state.scheduleType === 'Of the Day'}
              collapsed={this.state.collapsed}
            />
          </View>
          <View style={styles.submitButtonContainer}>
            <SubmitButton
              title="Get Schedule"
              onPress={this.onGetSchedule}
              style={styles.submitButton}
              collapsed={this.state.collapsed}
            />
          </View>
        </View>
        {
          this.state.showEmptyState ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>There is no route for given origin and destination.</Text>
            </View>
          ) : (
            <FlatList
              data={this.state.scheduleList}
              renderItem={this.renderListItem}
              scrollEnabled={this.state.scheduleList.length > 1}
            />
          )
        }
        <View style={[styles.row, styles.dropdowns]}>
          {
            this.state.showFromDropdown ? (
              <Dropdown
                onSelect={option => this.setState({ from: option, showFromDropdown: false })}
                options={Object.values(stations)}
              />
            ) : <View style={{ flex: 1, margin: 10 }} />
          }
          {
            this.state.showToDropdown ? (
              <Dropdown
                onSelect={option => this.setState({ to: option, showToDropdown: false })}
                options={Object.values(stations)}
              />
            ) : <View style={{ flex: 1, margin: 10 }} />
          }
        </View>
      </View>
    );
  }
}

export default ScheduleScreen;
