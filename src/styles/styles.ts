import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 100,
  },
  label: {
    width: '25%',
  },
  textInput: {
    height: 40,
    width: '65%',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  textInputError: {
    borderColor: 'red',
  },
});
