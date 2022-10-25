import React from 'react';
import Router from './src/routes/Router';
import { ThemeProvider } from '@rneui/themed';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import store from 'store/index';

import {
  useFonts,
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from '@expo-google-fonts/noto-sans-kr';

const App = () => {
  const [fontsLoaded] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
