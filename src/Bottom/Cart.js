import * as React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCart } from '../Common/UseCart';

function Cart() {
  const { cart, loadCart, addToCart, removeFromCart, deleteFromCart } = useCart();

  React.useEffect(() => {
    loadCart();
  }, []);

  return (
    <View style={{ flex: 1, paddingBottom: 70, paddingLeft: 10, paddingRight: 10 }}>
      {cart.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              alignSelf: 'center',
            }}>
            Cart empty
          </Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 20,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 20,
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
                style={{ width: '30%', justifyContent: 'center', alignItems: 'center', height: undefined, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'red' }}
                source={{
                  uri: item.image,
                }}
              />
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text>{item.title}</Text>
                <Text>Price: {item.price}$</Text>
                <Text>Total: {item.quantity * item.price}$</Text>
                <View style={{ position: 'relative', bottom: 0, right: -75, flexDirection: 'row' }}>
                  {/* delete */}
                  <TouchableOpacity onPress={() => deleteFromCart(item)} style={{ marginLeft: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../images/delete.png')} style={{ width: 22, height: 22, tintColor: 'red' }} />
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end', borderWidth: 1, borderRadius: 10 }}>
                    {/* minus */}
                    <TouchableOpacity style={{ marginRight: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }} onPress={() => removeFromCart(item)}>
                      <Text style={{ fontSize: 16 }}>—</Text>
                    </TouchableOpacity>
                    {/* quantity */}
                    <Text style={{ alignSelf: 'center' }}>{cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0}</Text>
                    {/* plus */}
                    <TouchableOpacity
                      style={{
                        marginLeft: 5,
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                      onPress={() => addToCart(item)}>
                      <Text style={{ fontSize: 16 }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

export default Cart;
