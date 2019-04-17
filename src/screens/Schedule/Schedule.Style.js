import { StyleSheet } from 'react-native';

import { THEME_PRIMARY, THEME_WHITE } from '../../components/UI/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  modeButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME_PRIMARY,
    marginLeft: 25,
    marginRight: 25,
  },
  submitButtonContainer: {
    alignItems: 'center',
    marginBottom: 8
  },
  submitButton: {
    paddingLeft: 20, 
    paddingRight: 20,
    marginTop: 5
  },
  collapseButtonContainer: {
    alignItems: 'flex-end'
  },
  dropdowns: {
    position: 'absolute',
    top: 110
  },
  errorContainer: {
    margin: 30,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME_PRIMARY
  }
});

export default styles;