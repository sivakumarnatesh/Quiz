import React from 'react';
// import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Home from './screens/Home';
// import Quiz from './screens/Quiz';
// import Result from './screens/Result';
import MyStack from './navigation';

const App = () => {
  return (
     <NavigationContainer>
      <MyStack />
     </NavigationContainer>
  )
}

export default App;