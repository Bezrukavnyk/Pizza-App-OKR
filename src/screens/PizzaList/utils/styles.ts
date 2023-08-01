import { StatusBar, StyleSheet } from "react-native";

export const listPizzaStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    paddingTop: StatusBar.currentHeight,
  },
  productWrap: {
    display: "flex",
    marginBottom: 16,
  },
  inputSearch: {
    fontSize: 16,
    marginVertical: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
  },
});
