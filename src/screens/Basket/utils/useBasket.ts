import { Alert } from "react-native";

import { useAppSelector } from "utils/store";
import { NavigationProps } from "utils/types";

type ReturnProps = {
  orderIdsPizza: string[];
  buyMyOrder: () => void;
  totalPizzaCount: number;
};

export const useBasket = (
  navigation: NavigationProps["navigation"]
): ReturnProps => {
  const totalPizzaCount = useAppSelector(
    (store) => store.basket.totalPizzaCount
  );
  const orderInfo = useAppSelector((store) => store.basket.orderPizzaIds);
  const orderIdsPizza = Object.keys(orderInfo);

  const buyMyOrder = (): void => {
    if (totalPizzaCount) {
      navigation.navigate("PayPage");
    } else {
      Alert.alert("Your basket is empty");
    }
  };

  return {
    totalPizzaCount,
    orderIdsPizza,
    buyMyOrder,
  };
};
