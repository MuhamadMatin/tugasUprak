import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // import AsyncStorage
import Loader from '../Common/Loader';
import { useCart } from '../Common/UseCart';
import { useWishlist } from '../Common/UseWishlist';

function Main({ item }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { cart, loadCart, addToCart, removeFromCart, deleteFromCart } = useCart();
  const { wishlist, loadWishlist, addToWishlist, removeFromWishlist, deleteFromWishlist } = useWishlist();

  async function getProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
    loadCart();
    loadWishlist();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingBottom: 70, paddingLeft: 10, paddingRight: 10 }}>
        {isLoading ? (
          <Loader />
        ) : (
          <View>
            <FlatList
              data={data}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'center' }}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item, index }) => (
                <View
                  key={index}
                  style={{
                    flex: 1,
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
                  <View style={{ position: 'absolute', top: 10, zIndex: 1, right: 10, width: '20%' }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (wishlist.find((wishlistItem) => wishlistItem.id === item.id)) {
                          deleteFromWishlist(item);
                        } else {
                          // addToWishlist(item);
                        }
                      }}
                      style={{ borderRadius: 999, alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={wishlist.find((wishlistItem) => wishlistItem.id === item.id) ? require('../images/heart2.png') : require('../images/hearth.png')} style={{ width: 24, height: 24, tintColor: 'red' }} />
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={{ width: '100%', justifyContent: 'center', height: undefined, aspectRatio: 1, resizeMode: 'contain' }}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Text style={{ marginTop: 10, fontSize: 18 }}>{item.title}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'orange', marginTop: 5, fontSize: 16, marginRight: 5 }}>⭐{item.rating.rate}</Text>
                    <Text style={{ marginTop: 5, fontSize: 16 }}>| {item.price} $</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      marginTop: 10,
                      borderWidth: 1,
                      borderRadius: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingBottom: 5,
                      paddingTop: 5,
                      alignItems: 'center',
                    }}
                    onPress={() => addToCart(item)}>
                    <Text>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default Main;
