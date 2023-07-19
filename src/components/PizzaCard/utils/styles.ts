import {StyleSheet} from 'react-native';

export const cardItemStyles = StyleSheet.create({
  pizzaImage: {
    width: '100%',
    paddingBottom: '100%',
    marginTop: 15,
    borderRadius: 4,
    display: 'flex',
  },
  btn: {
    display: 'flex',
    flex: 0.5,
    minWidth: '40%',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 4,
  },
  textPrice: {
    fontSize: 14,
    fontWeight: '800',
  },
});
