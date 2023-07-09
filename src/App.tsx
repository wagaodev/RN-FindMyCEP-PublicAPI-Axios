import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Home } from './views/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' />
      <Home />
    </SafeAreaView>
  );
}

export default App;
