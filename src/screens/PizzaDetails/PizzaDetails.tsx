import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { addToBasket, useAppDispatch, useAppSelector } from "utils/store";
import { RootStackParamList } from "utils/types";
import { pizzaArrayMockData } from "utils/constants";
import { MainActionBtn } from "controls";

import { pizzaItemStyles } from "./styles";

export type NavigationProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

const PizzaDetails = ({
  route,
  navigation,
}: {
  navigation: NavigationProps<"Details">["navigation"];
  route: NavigationProps<"Details">["route"];
}): JSX.Element => {
  const { id } = route.params;
  const dispatch = useAppDispatch();
  const totalPizzaCount = useAppSelector(
    (store) => store.basket.totalPizzaCount
  );
  const pizzaInfo = pizzaArrayMockData.find((pizza) => pizza.id === id);

  const handleAddPizza = (): void => {
    dispatch(addToBasket(id));
  };

  return (
    <View style={pizzaItemStyles.wrapper}>
      {!!totalPizzaCount && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Basket")}
          style={pizzaItemStyles.basketBtn}
        >
          <Text
            style={pizzaItemStyles.btnText}
          >{`Basket: ${totalPizzaCount}`}</Text>
        </TouchableOpacity>
      )}
      <KeyboardAvoidingView style={pizzaItemStyles.container}>
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
      </KeyboardAvoidingView>
      <MainActionBtn title="Add to Basket" onPress={handleAddPizza} />
    </View>
  );
};

export default PizzaDetails;
