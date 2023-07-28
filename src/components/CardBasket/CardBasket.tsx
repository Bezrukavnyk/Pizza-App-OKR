import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { pizzaArrayMockData } from "utils/constants";
import {
  addToBasket,
  removeFromBasket,
  useAppDispatch,
  useAppSelector,
} from "utils/store";

import { basketItemStyles } from "../HeaderList/styles";

type Props = {
  id: number;
};

const CardBasket: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const pizzaInfo = pizzaArrayMockData.find((pizza) => pizza.id === id);
  const orderInfo = useAppSelector((store) => store.basket.orderPizzaIds);

  const handleAddPizza = (): void => {
    dispatch(addToBasket(id));
  };
  const handleRemovePizza = (): void => {
    dispatch(removeFromBasket(id));
  };

  return (
    <View style={basketItemStyles.basketItem}>
      <View>
        <Image
          style={basketItemStyles.previewImg}
          source={{
            uri: pizzaInfo?.img,
          }}
        />
      </View>
      <View style={basketItemStyles.mainInfo}>
        <Text style={basketItemStyles.title}>
          {pizzaInfo?.title} x {orderInfo[id]}
        </Text>
        <Text style={basketItemStyles.price}>{pizzaInfo?.price}$</Text>
      </View>
      <View style={basketItemStyles.countInfo}>
        <TouchableOpacity
          onPress={handleRemovePizza}
          style={basketItemStyles.btnCount}
        >
          <Text style={basketItemStyles.btnCountText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={basketItemStyles.btnCount}
          onPress={handleAddPizza}
        >
          <Text style={basketItemStyles.btnCountText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardBasket;
