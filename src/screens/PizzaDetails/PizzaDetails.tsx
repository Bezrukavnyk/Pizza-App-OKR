import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {addToBasket, useAppDispatch, useAppSelector} from '../../utils/store';
import {NavigationProps} from '../../utils/types';
import {pizzaArrayMockData} from '../../utils/constants';
import {MainActionBtn} from '../../controls';

import {pizzaItemStyles} from './styles';

const PizzaDetails = ({route, navigation}: NavigationProps): JSX.Element => {
  const {id} = route.params;
  const dispatch = useAppDispatch();
  const totalPizzaCount = useAppSelector(store => store.basket.totalPizzaCount);
  const pizzaInfo = pizzaArrayMockData.find(pizza => pizza.id === id);

  const handleAddPizza = (): void => {
    dispatch(addToBasket(id));
  };

  return (
    <SafeAreaView style={pizzaItemStyles.wrapper}>
      {!!totalPizzaCount && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Basket')}
          style={pizzaItemStyles.basketBtn}>
          <Text
            style={
              pizzaItemStyles.btnText
            }>{`Basket: ${totalPizzaCount}`}</Text>
        </TouchableOpacity>
      )}
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScrollView style={pizzaItemStyles.container}>
        <Image
          style={pizzaItemStyles.mainImg}
          source={{
            uri: pizzaInfo?.img,
          }}
        />
        <Text style={pizzaItemStyles.title}>{pizzaInfo?.title}</Text>
        <Text style={pizzaItemStyles.price}>{pizzaInfo?.price}$</Text>
        <Text style={pizzaItemStyles.description}>
          {pizzaInfo?.description}
        </Text>
      </ScrollView>
      <MainActionBtn title="Add to Basket" onPress={handleAddPizza} />
    </SafeAreaView>
  );
};

export default PizzaDetails;
