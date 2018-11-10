import React, {Component} from 'react';
import {StyleSheet, Platform, Text, View, TouchableOpacity, TextInput } from 'react-native';

import { THEME_GREEN, THEME_WHITE } from '../../components/UI/theme';
import ThemeButton from '../../components/UI/ThemeButton/ThemeButton';
import startApp from '../StartApp/startApp';

class AuthScreen extends Component {
  state = {
    authMode: 'login',
    formState: {
      email: {
        value: 'Email',
        touched: false
      },
      password: {
        value: 'Password',
        touched: false
      }
    }
  }

  inputChangeHandler = (key, value) => {
    this.setState(prevState => {
      return {
        formState: {
          ...prevState.formState,
          [key]: {
            ...prevState.formState[key],
            value
          }
        }
      };
    });
  };

  clearFieldOnFocus = (key) => {
    if (!this.state.formState[key].touched) {
      this.setState(prevState => {
        return {
          formState: {
            ...prevState.formState,
            [key]: {
              ...prevState.formState[key],
              value: '',
              touched: true
            }
          }
        };
      });
    }
  };

  authHandler = () => {
    const authData = {
      email: this.state.formState.email.value,
      password: this.state.formState.password.value
    };
    startApp();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              value={this.state.formState.email.value}
              onFocus={() => this.clearFieldOnFocus('email')}
              style={[styles.inputContent, Platform.OS === 'ios' ? styles.iphoneInputPadding : styles.androidInputPadding]}
              onChangeText={val => this.inputChangeHandler('email', val)}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              value={this.state.formState.password.value}
              onFocus={() => this.clearFieldOnFocus('password')}
              style={[styles.inputContent, Platform.OS === 'ios' ? styles.iphoneInputPadding : styles.androidInputPadding]}
              onChangeText={val => this.inputChangeHandler('password', val)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={this.state.formState['password'].touched ? true : false}
            />
          </View>
          <ThemeButton onPress={this.authHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_GREEN
  },
  inputContainer: {
    width: '80%'
  },
  inputWrapper: {
    borderBottomColor: THEME_WHITE,
    borderBottomWidth: 1,
    marginBottom: 30
  },
  inputContent: {
    color: THEME_WHITE,
  },
  iphoneInputPadding: {
    padding: 7
  },
  androidInputPadding: {
    padding: 5
  }
});

export default AuthScreen;