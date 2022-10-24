import React from 'react';
import Router from './src/routes/Router';
import { ThemeProvider } from '@rneui/themed';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from '@expo-google-fonts/noto-sans-kr';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './src/pages/Home';

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
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
