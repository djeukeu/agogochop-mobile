import { StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
  back: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
  },
  backTxt: {
    color: Colors.secondary,
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    marginLeft: 6,
  },
  container: {
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: Colors.secondary,
    fontFamily: 'Helvetica-Bold',
    fontSize: 24,
    marginTop: 16,
    textTransform: 'capitalize',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    height: 96,
    width: 96,
  },
  wrapper: {
    alignItems: 'center',
    marginTop: 24,
  },
});

export default styles;
