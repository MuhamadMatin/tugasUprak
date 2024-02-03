import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../Custom/CustomButton';
import CustomAlert from '../Custom/CustomAlert';
import CustomAlertAuto from '../Custom/CustomAlertAuto';
import { useCart } from '../Composables/UseCart';
import { useWishlist } from '../Composables/UseWishlist';
import { useAddress } from '../Composables/UseAddress';

function Profile() {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const { cart, loadCart, addToCart, removeFromCart, deleteFromCart, clearCart } = useCart();
  const { wishlist, loadWishlist, addToWishlist, removeFromWishlist, deleteFromWishlist, iSWishlist, clearWishlist } = useWishlist();
  const { address, addAddress, removeAddress, editAddress, clearAddress } = useAddress();

  async function getData() {
    const nama = await AsyncStorage.getItem('NAME');
    const email = await AsyncStorage.getItem('EMAIL');
    const pass = await AsyncStorage.getItem('PASSWORD');
    const phone = await AsyncStorage.getItem('PHONE');
    setData({ nama, email, pass, phone });
  }

  async function removePersonal() {
    await AsyncStorage.removeItem('NAME');
    await AsyncStorage.removeItem('EMAIL');
    await AsyncStorage.removeItem('PASSWORD');
    await AsyncStorage.removeItem('PHONE');
  }

  async function logout() {
    removePersonal();
    clearCart();
    clearWishlist();
    clearAddress();
    navigation.navigate('Login');
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20, paddingBottom: 70, paddingLeft: 10, paddingRight: 10 }}>
      <View style={{ borderWidth: 1, borderRadius: 999, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/images/profile.png')} style={{ width: 56, height: 56, tintColor: '#000' }} />
      </View>
      <View style={{ marginTop: 5, tinColor: '#000', alignItems: 'center' }}>
        <Text>{data.nama}</Text>
        <Text>{data.email}</Text>
        <Text>{data.address}</Text>
      </View>
      <CustomButton onPress={() => navigation.navigate('Address')} title={'Address'} bgColor={'#080202'} textColor={'#fff'} />
      <CustomButton onPress={() => navigation.navigate('History')} title={'Riwayat'} bgColor={'#080202'} textColor={'#fff'} />
      <CustomButton
        onPress={() => {
          logout();
          navigation.navigate('Login');
        }}
        title={'Logout'}
        bgColor={'#fff'}
        textColor={'red'}
      />
    </View>
  );
}
export default Profile;
