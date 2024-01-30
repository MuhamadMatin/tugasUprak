import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import Address from '../Screens/AddressScreen';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';

function Profile({ route }) {
  const navigation = useNavigation();
  const [data, setData] = useState({});

  async function getData() {
    const nama = await AsyncStorage.getItem('NAME');
    const email = await AsyncStorage.getItem('EMAIL');
    const pass = await AsyncStorage.getItem('PASSWORD');
    const phone = await AsyncStorage.getItem('PHONE');
    setData({ nama, email, pass, phone });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20, paddingBottom: 70, paddingLeft: 10, paddingRight: 10 }}>
      <View style={{ borderWidth: 1, borderRadius: 999, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../images/profile.png')} style={{ width: 56, height: 56, tintColor: '#000' }} />
      </View>
      <View style={{ tinColor: '#000', alignItems: 'center' }}>
        <Text
          onPress={() => {
            navigation.navigate('Address');
          }}>
          {data.nama}
        </Text>
        <Text>{data.email}</Text>
        <Text>{data.address}</Text>
      </View>
      <CustomButton onPress={() => navigation.navigate('Address')} title={'Address'} bgColor={'#080202'} textColor={'#fff'} />
    </View>
  );
}
export default Profile;
