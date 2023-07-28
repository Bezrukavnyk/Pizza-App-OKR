import { StatusBar, StyleSheet } from "react-native";

export const basketStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    paddingTop: StatusBar.currentHeight || 15,
    paddingBottom: 20,
    width: "100%",
  },
  wrapper: {
    flex: 1,
  },
  previewImg: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
    letterSpacing: 0.4,
  },
  price: {
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  basketItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
    flex: 1,
    width: "100%",
  },
  mainInfo: {
    flex: 0.33,
    padding: 10,
  },
  countInfo: {
    flex: 0.33,
    padding: 10,
    display: "flex",
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
  },
  btnCount: {
    backgroundColor: "orange",
    borderRadius: 8,
    textAlign: "center",
    height: "auto",
  },
  btnCountText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    margin: 0,
    width: 40,
  },
  emptyBasket: {
    flex: 1,
    display: "flex",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
