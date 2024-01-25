import * as React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';

function Login({ route }) {
  const navigation = useNavigation();
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [badEmail, setBadEmail] = React.useState(false);
  const [badPassword, setBadPassword] = React.useState(false);
  function validate() {
    // if (Email == '') {
    //   setBadEmail(true);
    // }
    // if (Password == '') {
    //   setBadPassword(true);
    // }
    Email == '' ? setBadEmail(true) : setBadEmail(false);
    Password == '' ? setBadPassword(true) : setBadPassword(false);
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          alignSelf: 'center',
        }}>
        login Screen
      </Text>
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
      <CustomTextInput type={'password'} value={Password} onChangeText={(txt) => setPassword(txt)} placeholder={'•••••••••••'} />
      {badPassword === true && (
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
          }}>
          Enter Password
        </Text>
      )}
      <CustomButton onPress={() => validate()} title={'login'} bgColor={'#080202'} textColor={'#fff'} />
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 800,
          fontSize: 14,
          marginTop: 10,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Create new Account
      </Text>
    </View>
  );
}

export default Login;
