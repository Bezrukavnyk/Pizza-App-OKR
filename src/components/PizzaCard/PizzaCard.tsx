import {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {PizzaListItem} from '../../utils/types';

import {cardItemStyles} from './utils/styles';

type Props = {
  pizzaInfo: PizzaListItem;
  onPress: () => void;
};

const PizzaCard: FC<Props> = ({pizzaInfo, onPress}) => {
  return (
    <TouchableOpacity style={cardItemStyles.btn} onPress={onPress}>
      <Image
        style={cardItemStyles.pizzaImage}
        source={{
          uri: pizzaInfo.img,
        }}
      />
      <Text style={cardItemStyles.textTitle}>{pizzaInfo.title}</Text>
      <Text style={cardItemStyles.textPrice}>{pizzaInfo.price}$</Text>
    </TouchableOpacity>
  );
};

export default PizzaCard;
