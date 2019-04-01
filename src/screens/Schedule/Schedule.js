import React, {Component} from 'react';
import { Text, View, FlatList, LayoutAnimation, NativeModules } from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

import styles from './Schedule.Style';
import stations from '../../constants/stations';
import ModeButton from '../../components/ModeButton/ModeButton';
import Dropdown from '../../components/Dropdown/Dropdown';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import ScheduleListItem from '../../components/ScheduleListItem/ScheduleListItem';
import CollapseButton from '../../components/CollapseButton/CollapseButton';
import { getCustomLayoutSpring, getTrainNumberFromSchedule } from './Schedule.Function';
import { getASAPSchedule, getDaySchedule, openScheduleDetail } from './scheduleUtil';

const CustomLayoutSpring = getCustomLayoutSpring();

class ScheduleScreen extends Component {
  state = {
    from: null,
    to: null,
    scheduleType: null,
    scheduleList: [],
    collapsed: false,
    today: new Date().getDay(), // to update day schedule when day changes,
    height: 238
  };

  onGetSchedule = () => {
    let scheduleList = null;

    if (this.state.scheduleType === 'ASAP') {
      scheduleList = getASAPSchedule(this.state.from, this.state.to);
    } else {
      scheduleList = getDaySchedule(this.state.from, this.state.to);
    }

    this.setState({ scheduleList });
  }

  renderListItem = (info) => {
    if (this.state.scheduleList.length === 1) {
      return <ScheduleCard schedule={info.item} />
    } else {
      return <ScheduleListItem schedule={info.item} onPress={() => openScheduleDetail(info.item)} />
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
            />
            <ModeButton
              value={this.state.to || 'To'}
              onPress={() => this.setState(prevState => ({ showToDropdown: !prevState.showToDropdown }))}
              isActive={!!this.state.to}
              collapsed={this.state.collapsed}
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

export default ScheduleScreen;