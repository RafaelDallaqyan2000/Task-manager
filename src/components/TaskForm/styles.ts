import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 10,
    height: Dimensions.get('window').height - 170,
  },
  inputsContainer: {
    // backgroundColor: '#a32759',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'space-around',
  },
  input: {
    borderWidth: 2,
    borderColor: '#8EAEFD',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
  },
  selectedDate: {
    color: '#a32759',
    fontWeight: 'bold',
  },
  saveBtnContainer: {
    backgroundColor: '#FF9800',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  selectDateBtnContainer: {
    backgroundColor: '#8EAEFD',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  selectDateBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  error: {
    color: 'red',
    borderColor: 'red',
  },
});
