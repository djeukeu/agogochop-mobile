import { StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
  forgotPassword: {
    color: Colors.primary,
    fontFamily: 'Helvetica-Bold',
    marginTop: 10,
    textAlign: 'right',
  },
  formInput: {
    marginBottom: 20,
  },
  loginWith: {
    alignItems: 'center',
    marginTop: 16,
  },
  loginWithText: {
    color: Colors.black,
    fontFamily: 'Helvetica',
    marginBottom: 8,
  },
  register: {
    color: Colors.black,
    fontFamily: 'Helvetica',
    marginBottom: 16,
    marginTop: 32,
    textAlign: 'center',
  },
  registerText: {
    color: Colors.primary,
    fontFamily: 'Helvetica-Bold',
  },
  screen: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default styles;
