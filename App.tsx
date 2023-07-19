import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/utils/store/store';
import Router from './src/screens/Router/Router';

const App = (): JSX.Element => (
  <SafeAreaView style={{flex: 1}}>
    <Provider store={store}>
      <Router />
    </Provider>
  </SafeAreaView>
);

export default App;
