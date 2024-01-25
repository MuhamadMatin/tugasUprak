import * as React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';

function Register({ route }) {
  const navigation = useNavigation();
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [badName, setBadName] = React.useState(false);
  const [badEmail, setBadEmail] = React.useState(false);
  const [badPassword, setBadPassword] = React.useState(false);
  const [badPhone, setBadPhone] = React.useState(false);
  function validate() {
    // if (Email == '') {
    //   setBadEmail(true);
    // }
    // if (Password == '') {
    //   setBadPassword(true);
    // }
    Email == '' ? setBadEmail(true) : setBadEmail(false);
    Name == '' ? setBadName(true) : setBadName(false);
    Password == '' ? setBadPassword(true) : setBadPassword(false);
    Phone == '' ? setBadPhone(true) : setBadPhone(false);
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          alignSelf: 'center',
        }}>
        Register Screen
      </Text>
      <CustomTextInput value={Name} onChangeText={(txt) => setName(txt)} placeholder={'Your name'} />
      {badName === true && (
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
          }}>
          Enter name
        </Text>
      )}
      <CustomTextInput value={Email} onChangeText={(txt) => setEmail(txt)} placeholder={'Email@gmail.com'} />
      {badEmail === true && (
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
          }}>
          Enter email
        </Text>
      )}
      <CustomTextInput value={Password} type={'password'} onChangeText={(txt) => setPassword(txt)} placeholder={'•••••••••••'} />
      {badPassword === true && (
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
          }}>
          Enter Password
        </Text>
      )}
      <CustomTextInput value={Phone} onChangeText={(txt) => setPhone(txt)} keyboardtype={'phone-pad'} placeholder={'12345678'} />
      {badPhone === true && (
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
          }}>
          Enter phone number
        </Text>
      )}
      <CustomButton onPress={() => validate()} title={'Register'} bgColor={'#000'} textColor={'#fff'} />
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 800,
          fontSize: 14,
          marginTop: 10,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Have Account? Login
      </Text>
    </View>
  );
}

export default Register;
