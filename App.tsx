import React from 'react';
import Router from './src/routes/Router';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './src/pages/Home';

const App = () => {
  return <Router />;
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
