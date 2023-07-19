import {StatusBar, StyleSheet} from 'react-native';

export const payPageStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: StatusBar.currentHeight || 15,
    paddingBottom: 20,
    width: '100%',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
