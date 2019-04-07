import React, {Component} from 'react';
import { Text, View, FlatList, LayoutAnimation, NativeModules, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker'

import { THEME_PRIMARY } from '../../components/UI/theme';
import styles from '../Schedule/Schedule.Style';
import stations from '../../constants/stations';
import ModeButton from '../../components/ModeButton/ModeButton';
import Dropdown from '../../components/Dropdown/Dropdown';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import ScheduleListItem from '../../components/ScheduleListItem/ScheduleListItem';
import CollapseButton from '../../components/CollapseButton/CollapseButton';
import SwapButton from '../../components/SwapButton/SwapButton';
import { getDaySchedule, getTrainNumberFromSchedule } from '../../util/scheduleUtil';
import { getCustomLayoutSpring } from '../../util/layoutUtil';
import { openScheduleDetail, openSettingScreen } from '../../util/navUtil';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const CustomLayoutSpring = getCustomLayoutSpring();

class DayScheduleScreen extends Component {
  static options () {
    return {
      topBar: {
        rightButtons: [{
          id: 'openSetHomeScreen',
          component: {
            name: 'funjt.SettingButton',
            passProps: {
              onPress: () => openSettingScreen('funjt.DayScheduleScreen')
            }
          }
        }],
      }
    };
  }

  state = {
    from: null,
    to: null,
    date: new Date(),
    scheduleList: [],
    collapsed: false,
    height: 238
  };

  componentDidMount() {
    AsyncStorage.getItem('funjt:Home')
      .then(value => this.setState({ from: value }))
      .catch(() => this.setState({ from: null }));

    AsyncStorage.getItem('funjt:Work')
      .then(value => this.setState({ to: value }))
      .catch(() => this.setState({ to: null }));
  }

  onGetSchedule = () => {
    if (!this.state.from || !this.state.to) return;
    const day = new Date(this.state.date).getDay();
    const scheduleList = getDaySchedule(this.state.from, this.state.to, day);
    this.setState({ scheduleList });
  }

  renderListItem = (info) => {
    return <ScheduleListItem schedule={info.item} onPress={() => openScheduleDetail(info.item, 'funjt.DayScheduleScreen')} />
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
          <Text style={[styles.modeButtonLabel, { marginTop: 10 }]}>Choose a date:</Text>
          <View style={styles.row}>
            {
              !this.state.collapsed &&
              <DatePicker
                style={{ flex: 1, margin: 10 }}
                date={this.state.date}
                mode="date"
                format="YYYY/MM/DD"
                confirmBtnText="Confirm"
                cancelBtnText="Close"
                showIcon={false}
                onDateChange={(date) => this.setState({ date })}
                customStyles={{
                  dateInput: {
                    borderColor: THEME_PRIMARY
                  }
                }}
              />
            }
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
        <FlatList
          data={this.state.scheduleList}
          renderItem={this.renderListItem}
          scrollEnabled={this.state.scheduleList.length > 1}
        />
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

export default DayScheduleScreen;