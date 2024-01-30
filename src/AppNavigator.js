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

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name="Awikwok"
              component={IndexScreen}
              options={{
                headerShown: true,
                headerStyle: {
                  height: 70,
                  backgroundColor: '#f4f4f4',
                },
                // headerRight: () => <Text>Menu</Text>,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
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
          </>
        )}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
