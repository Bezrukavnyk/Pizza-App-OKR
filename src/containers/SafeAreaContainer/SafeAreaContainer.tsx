import { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

type Props = {
  children: React.ReactElement;
};

const SafeAreaContainer: FC<Props> = ({ children }) => (
  <SafeAreaView style={style.container}>{children}</SafeAreaView>
);

export default SafeAreaContainer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
