import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
  },
  buttonLength: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
  },
  buttonSize: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#E5BF3C'
  },
  length: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  }
});