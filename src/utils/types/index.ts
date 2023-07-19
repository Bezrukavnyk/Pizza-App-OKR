import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface PizzaListItem {
  title: string;
  price: number;
  img: string;
  id: number;
  description: string;
}

export type RootStackParamList = {
  List: undefined;
  Details: {
    id: number;
  };
  Basket: undefined;
  PayPage: undefined;
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Details' | 'List' | 'Basket'
>;
