import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { useCart } from '../Composables/UseCart';
import Loader from '../Custom/Loader';
import CustomButton from '../Custom/CustomButton';
import { useFetch } from '../Composables/UseFetch';
import { useAddress } from '../Composables/UseAddress';
import CustomAlertAuto from '../Custom/CustomAlertAuto';
import Main from '../Bottom/Main';

function CheckoutScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [total, setTotal] = useState();
  const { cart, loadCart, addToCart, removeFromCart, deleteFromCart, clearCart } = useCart();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rupiah, setRupiah] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { address, loadAddress, addAddress, removeAddress, editAddress } = useAddress();

  async function getDollar(item) {
    try {
      const response = await fetch(`https://api.getgeoapi.com/v2/currency/convert?api_key=4e724b2c7f706c7d8703e934afff4a7e297305a9&from=USD&to=IDR&amount=${item?.price}&format=json`, {
        method: 'GET',
      });
      const json = await response.json();
      let convert = json.rates.IDR.rate;
      setRupiah(convert);
      console.log(json.rates.IDR.rate);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    loadAddress();
  }, []);
  React.useEffect(() => {
    loadCart();
    getDollar();
  }, []);

  React.useEffect(() => {
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (selectedAddress) {
      totalPrice += 5.0;
    }

    setTotal(totalPrice);
  }, [cart, selectedAddress]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingBottom: 180, paddingLeft: 10, paddingRight: 10 }}>
        <FlatList
          data={cart}
          style={{ marginTop: 10 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 5,
                padding: 15,
                backgroundColor: 'white',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
              }}>
              <Image
                style={{ width: '30%', justifyContent: 'center', alignItems: 'center', height: undefined, aspectRatio: 1, resizeMode: 'contain' }}
                source={{
                  uri: item.image,
                }}
              />
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: 500 }}>{item.title}</Text>
                <Text style={{ marginTop: 5 }}>
                  {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price * rupiah)} X {item.quantity}
                </Text>
                <Text>{item.quantity * item.price}$</Text>
              </View>
            </View>
          )}
        />
      </View>
      {/* bottom */}
      <View style={{ width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: undefined, position: 'absolute', bottom: 0, backgroundColor: '#fff' }}>
        <View style={{ marginTop: 5, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 400 }}>Total</Text>
          <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 500 }}>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total * rupiah)}</Text>
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
              <Text>Surabaya</Text>
              <Image source={require('../../assets/images/arrow.png')} style={{ marginHorizontal: 10, width: 24, height: 24 }} />
            </View>
            <View style={{ justifyContent: 'center', maxHeight: 100 }}>
              {address.length === 0 ? <Text>address not found</Text> : ''}
              {!selectedAddress ? (
                <View>
                  <Text style={{ marginVertical: 5 }}>Select Address</Text>
                  <FlatList
                    data={address}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => setSelectedAddress(item.city)}>
                        <Text>{item.city}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              ) : (
                <Text>{selectedAddress}</Text>
              )}
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <CustomButton
            onPress={() => {
              clearCart();
              setModalVisible(true);
              setTimeout(() => {
                navigation.navigate('Index', setSelectedTab(0));
                setSelectedTab(0);
              }, 2500);
            }}
            title={'Checkout now'}
            bgColor={'#000'}
            textColor={'#fff'}
          />
        </View>
      </View>
      <CustomAlertAuto title="shipping incoming" closedText="Close" setModalVisible={setModalVisible} modalVisible={modalVisible} />
    </View>
  );
}

export default CheckoutScreen;
