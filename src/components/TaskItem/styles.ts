import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 5,
  },
  viewBtnContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  deleteBtnContainer: {
    backgroundColor: '#e66157',
    padding: 5,
    borderRadius: 5,
  },
  deleteBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  alertContainer: {
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#333',
    padding: 20,
  },
  statusContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});
