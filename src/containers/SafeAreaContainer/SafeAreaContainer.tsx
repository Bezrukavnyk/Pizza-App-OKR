import { FC } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

type Props = {
  children: React.ReactElement;
};

const SafeAreaContainer: FC<Props> = ({ children }) => (
  <SafeAreaView style={style.container}>
    <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
    {children}
  </SafeAreaView>
);

export default SafeAreaContainer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
