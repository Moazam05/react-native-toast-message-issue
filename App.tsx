import React from 'react';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/ToastConfig';
import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <Home />

      <Toast
        visibilityTime={2500}
        config={toastConfig}
        bottomOffset={0}
        swipeable={false}
        position="bottom"
      />
    </>
  );
};

export default App;
