import {StatusBar, StyleSheet} from 'react-native';

export const pizzaItemStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: StatusBar.currentHeight || 15,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 5,
    letterSpacing: 0.4,
  },
  price: {
    fontSize: 30,
    fontWeight: '800',
    marginVertical: 5,
    letterSpacing: 0.4,
  },
  description: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 5,
    letterSpacing: 0.4,
    marginBottom: 40,
  },
  mainImg: {
    width: '100%',
    paddingBottom: '100%',
    marginTop: 15,
    marginBottom: 25,
    borderRadius: 4,
  },
  wrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  basketBtn: {
    position: 'absolute',
    top: 15,
    right: 10,
    zIndex: 4,
    paddingVertical: 8,
    backgroundColor: 'orange',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
});
