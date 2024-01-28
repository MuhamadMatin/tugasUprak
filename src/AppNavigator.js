import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import IndexScreen from './Screens/IndexScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    // berguna sebagai router pada semua halaman
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Awikwok"
          component={IndexScreen}
          options={{
            headerShown: true,
            headerStyle: {
              height: 70,
              backgroundColor: '#f4f4f4',
            },
            headerRight: () => <Text>Menu</Text>,
          }}
        />

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          options={{
            headerStyle: {
              headerShown: false,
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
