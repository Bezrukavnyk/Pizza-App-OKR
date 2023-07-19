import React, { useEffect } from "react";
import { Platform, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";

import { store } from "utils/store/store";
import Router from "screens/Router/Router";
const App = (): JSX.Element => {
  useEffect(() => {
    if (Platform.OS === "android") SplashScreen?.hide();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
