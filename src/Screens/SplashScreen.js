import * as React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splash() {
  const navigation = useNavigation();
  setTimeout(() => {
    getData();
  }, 3000);

  // async function getData() {
  //   const Email = await AsyncStorage.getItem('EMAIL');
  //   if (Email !== '' || Email !== undefined || Email !== null) {
  //     navigation.navigate(Index);
  //     console.log(Email);
  //   } else {
  //     navigation.navigate(Login);
  //     console.log(Email);
  //   }
  // }

  async function getData() {
    // nama valiabel diambil dari register dan harus sama
    const Email = await AsyncStorage.getItem('EMAIL');
    // jika Email tidak sama dengan email yang dari register maka akan ditolah
    if (Email !== null) {
      navigation.navigate('Awikwok');
      console.log(Email);
    } else {
      navigation.navigate('Login');
      console.log(Email);
    }
    // if (Email === mEmail && Password === mPass) {
    //   navigation.navigate('Index');
    //   console.log(mEmail, mPass);
    // } else{
    //   Alert.alert('wrong password');
    //   console.log(mEmail, mPass);
    // }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash Screen</Text>
      <TouchableOpacity onPress={() => getData()}>
        <Text>kirim</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Splash;
