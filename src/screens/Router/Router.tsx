import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../utils/types';
import PizzaList from '../PizzaList/PizzaList';
import PizzaDetails from '../PizzaDetails/PizzaDetails';
import Basket from '../Basket/Basket';
import PayPage from '../PayPage/PayPage';

const Router = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="List"
          component={PizzaList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          options={{title: 'Pizza Details'}}
          component={PizzaDetails}
        />
        <Stack.Screen
          name="Basket"
          options={{title: 'Your order'}}
          component={Basket}
        />
        <Stack.Screen
          name="PayPage"
          options={{title: 'Buy your order'}}
          component={PayPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
