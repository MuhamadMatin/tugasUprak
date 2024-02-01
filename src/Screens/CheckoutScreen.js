import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { useCart } from '../Composables/UseCart';
import Loader from '../Custom/Loader';
import CustomButton from '../Custom/CustomButton';
import { useFetch } from '../Composables/UseFetch';

function CheckoutScreen() {
  const navigation = useNavigation();
  const [total, setTotal] = useState();
  const { cart, loadCart, addToCart, removeFromCart, deleteFromCart } = useCart();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { fetchApi } = useFetch();

  async function fetchApi(origin, destination, weight) {
    try {
      const response = await fetch('https://api.rajaongkir.com/starter/cost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          key: '399e1db98876dab3c15258a7734c38dd',
        },
        body: JSON.stringify({
          origin: '444',
          destination: '409',
          weight: 1,
          courier: 'jne',
        }),
      });
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    loadCart();
  }, []);

  React.useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalPrice);
  }, [cart]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
        <FlatList
          data={cart}
          style={{marginTop:10}}
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
                  {item.price}$ X {item.quantity}
                </Text>
                <Text>{item.quantity * item.price}$</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: undefined, position: 'absolute', bottom: 0, backgroundColor: '#fff' }}>
        <View style={{ marginTop: 5 }}>
          <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 400 }}>Total</Text>
          <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 500 }}>{total}$</Text>
        </View>
        <Text>pengiriman</Text>
        <View style={{ marginBottom: 10 }}>
          <CustomButton onPress={() => fetchApi()} title={'Checkout now'} bgColor={'#000'} textColor={'#fff'} />
        </View>
      </View>
    </View>
  );
}

export default CheckoutScreen;
