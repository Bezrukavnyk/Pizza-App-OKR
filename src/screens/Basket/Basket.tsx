import React from "react";
import { FlatList, View, StatusBar, Text } from "react-native";

import { NavigationProps } from "utils/types";
import { CardBasket } from "components";
import { MainActionBtn } from "controls";

import { useBasket } from "./utils/useBasket";
import { basketStyles } from "./utils/styles";

const Basket = ({ navigation }: NavigationProps): JSX.Element => {
  const { orderIdsPizza, buyMyOrder, totalPizzaCount } = useBasket(navigation);

  return (
    <View style={basketStyles.wrapper}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      {totalPizzaCount ? (
        <FlatList
          style={basketStyles.container}
          data={orderIdsPizza}
          renderItem={(item) => <CardBasket id={+item?.item} />}
          keyExtractor={(item) => item}
        />
      ) : (
        <View style={basketStyles.emptyBasket}>
          <Text>Your basket is empty</Text>
        </View>
      )}
      <MainActionBtn title="Go to pay" onPress={buyMyOrder} />
    </View>
  );
};

export default Basket;
