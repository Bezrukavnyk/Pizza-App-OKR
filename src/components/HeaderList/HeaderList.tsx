import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
  subTitle: string;
};

const HeaderList: FC<Props> = ({title, subTitle}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{subTitle}</Text>
    </View>
  );
};

export default HeaderList;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  description: {
    fontSize: 18,
    opacity: 0.8,
  },
});
