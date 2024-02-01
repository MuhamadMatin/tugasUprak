import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet, Alert, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // import AsyncStorage
import Loader from '../Custom/Loader';
import { useCart } from '../Composables/UseCart';
import { useWishlist } from '../Composables/UseWishlist';

function Search({ item }) {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState('electronics');

  async function getProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${input}`);
      const json = await response.json();
      setData(json);
      console.log(response);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingBottom: 70, paddingLeft: 10, paddingRight: 10 }}>
        {isLoading ? (
          <Loader />
        ) : (
          <View>
            {isError ? <Text style={{ alignSelf: 'center' }}>nggak ketemu</Text> : <Text>isi bang</Text>}
            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', width: '90%', paddingLeft: 15, paddingRight: 15, height: 50, borderRadius: 10, borderWidth: 0.5 }}>
              <TextInput style={{ width: '90%', height: 40 }} onChangeText={(text) => setInput(text)} value={input} />
              <TouchableOpacity onPress={() => getProducts(input)}>
                <Image source={require('../../assets/images/search.png')} style={{ borderRadius: 999, borderWidth: 1, width: 30, height: 30, tintColor: '#000', backgroundColor: 'red' }} />
              </TouchableOpacity>
            </View>
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
                      {/* <TouchableOpacity
                      onPress={() => {
                        iSWishlist(item);
                      }}
                      style={{ borderRadius: 999, alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        source={wishlist.find((wishlistItem) => wishlistItem.id === item.id) ? require('../../assets/images/heart2.png') : require('../../assets/images/hearth.png')}
                        style={{ width: 24, height: 24, tintColor: 'red' }}
                      />
                    </TouchableOpacity> */}
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
          </View>
        )}
      </View>
    </View>
  );
}

export default Search;
