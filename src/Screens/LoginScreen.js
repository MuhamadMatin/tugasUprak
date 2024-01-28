import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';
import Loader from '../Common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ route }) {
  const navigation = useNavigation();
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [badEmail, setBadEmail] = React.useState(false);
  const [badPassword, setBadPassword] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  async function login() {
    setModalVisible(true);
    if (Email == '') {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (Password == '') {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setModalVisible(false);
          getData();
        }, 2000);
      }
    }
  }
  
  async function getData() {
    // nama valiabel diambil dari register dan harus sama
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    // jika Email tidak sama dengan email yang dari register maka akan ditolah
    if (Email === mEmail && Password === mPass) {
      navigation.navigate('Index');
      console.log(mEmail, mPass);
      setBadPassword(false);
    } else {
      console.log(mEmail, mPass);
      setBadPassword(false);
    }
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
      <CustomButton onPress={() => login()} title={'login'} bgColor={'#080202'} textColor={'#fff'} />
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
      <Loader setModalVisible={setModalVisible} modalVisible={modalVisible} />
    </View>
  );
}

export default Login;
