import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {mainBtnStyles} from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

const MainActionBtn: FC<Props> = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress} style={mainBtnStyles.orderBtn}>
    <Text style={mainBtnStyles.btnText}>{title}</Text>
  </TouchableOpacity>
);

export default MainActionBtn;
