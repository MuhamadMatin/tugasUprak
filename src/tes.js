import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTextInput from './Common/CustomTextInput';
import CustomButton from './Common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Index({ route }) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          alignSelf: 'center',
        }}>
        Index Screen
      </Text>
      <TouchableOpacity
        style={{
          fontSize: 24,
          fontWeight: 600,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('Login', {})}>
        <Text>kirim</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Splash', {})}>
        <Text>Splash</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Index;

{
  /* <Image style={{alignSelf:'center', width: '95%', height: undefined, aspectRatio: 1, resizeMode: 'contain' }} source={require('../images/model.jpg')} /> */
}
{
  /* <View style={{ position: 'absolute', top: 10, zIndex: 1, right: 10, width: '20%' }}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('tes');
                    }}
                    style={{ borderRadius: 999, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../images/hearth.png')} style={{ width: 24, height: 24, tintColor: 'red' }} />
                  </TouchableOpacity>
                </View> */
}
