import { FC } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

type Props = {
  children: React.ReactElement;
};

const SafeAreaContainer: FC<Props> = ({ children }) => (
  <View style={style.container}>
    <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
    {children}
  </View>
);

export default SafeAreaContainer;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
