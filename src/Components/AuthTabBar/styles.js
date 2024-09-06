import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Constants/Colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: width / 2 - 32,
  },
  label: {
    color: Colors.secondary,
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    marginLeft: 8,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
});

export default styles;
