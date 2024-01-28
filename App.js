// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import MainContainer from './src/MainContainer';

function App() {
  return (
    // <Provider store={store}>
      <MainContainer />
    // </Provider>
  );
}

export default App;
