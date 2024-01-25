import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#080202',
              
            },
            headerTintColor: '#fff',
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f4f4f4',
            },
          }}
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
