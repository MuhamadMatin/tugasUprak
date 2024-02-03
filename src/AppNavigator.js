import { React, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import IndexScreen from './Screens/IndexScreen';
import AddressScreen from './Screens/AddressScreen';
import CheckoutScreen from './Screens/CheckoutScreen';
import DetailScreen from './Screens/DetailScreen';
import HistoryScreen from './Screens/HistoryScreen';
import Cart from './Bottom/Cart';
import Main from './Bottom/Main';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkEmail = async () => {
      const email = await AsyncStorage.getItem('EMAIL');
      !email ? setIsAuthenticated(false) : setIsAuthenticated(true);
    };

    checkEmail();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ route }) => ({ title: route.name }, console.log(route.name))}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        {isAuthenticated ? <></> : <></>}
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#f4f4f4',
            },
          }}
          name="Address"
          component={AddressScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#f4f4f4',
            },
          }}
          name="Checkout"
          component={CheckoutScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#f4f4f4',
            },
          }}
          name="Detail"
          component={DetailScreen}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
