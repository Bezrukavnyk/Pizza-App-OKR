import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import { store } from "utils/store/store";
import Router from "screens/Router/Router";

const App = (): JSX.Element => (
  <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <Router />
    </Provider>
  </SafeAreaView>
);

export default App;
