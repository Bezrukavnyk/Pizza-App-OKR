import React, { useEffect } from "react";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";

import { store } from "utils/store/store";
import Router from "screens/Router/Router";
import SafeAreaContainer from "containers/SafeAreaContainer/SafeAreaContainer";

const App = (): JSX.Element => {
  useEffect(() => {
    if (Platform.OS === "android") SplashScreen?.hide();
  }, []);

  return (
    <SafeAreaContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaContainer>
  );
};

export default App;
