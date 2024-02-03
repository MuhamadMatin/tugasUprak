import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet, Alert, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // import AsyncStorage
import Loader from '../Custom/Loader';
import { useCart } from '../Composables/UseCart';
import { useWishlist } from '../Composables/UseWishlist';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import CustomAlertAuto from '../Custom/CustomAlertAuto';
import CustomTextInput from '../Custom/CustomTextInput';
import { useConvert } from '../Composables/UseConvert';

function Search({ item }) {
  const navigation = useNavigation();
  const [input, setInput] = useState('electronics');
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState([]);
  const { cart, loadCart, addToCart, removeFromCart, deleteFromCart } = useCart();
  const { wishlist, loadWishlist, addToWishlist, removeFromWishlist, deleteFromWishlist, iSWishlist } = useWishlist();
  const [modalVisible, setModalVisible] = useState(false);
  const { rupiah } = useConvert();

  async function getProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const json = await response.json();
      setData(json);
      console.log(response.url);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [input]);

  useEffect(() => {
    // filter data
    setFilteredData(data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())));
  }, [search, data]);

  return (
    <View style={{ flex: 1 }}>
      <CustomTextInput icon={require('../../assets/images/search.png')} value={search} onChangeText={(text) => setSearch(text)} placeholder={'search in here'} />
      <View>
        {isLoading ? (
          <Loader />
        ) : // jika dilter kosong
        filteredData.length === 0 ? (
          <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 500 }}>Tidak ada data</Text>
        ) : (
          // jika tidak kosong
          <View style={{ marginBottom: 170 }}>
            <FlatList
              data={filteredData}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}
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
                        iSWishlist(item);
                      }}
                      style={{ borderRadius: 999, alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        source={wishlist.find((wishlistItem) => wishlistItem.id === item.id) ? require('../../assets/images/heart2.png') : require('../../assets/images/hearth.png')}
                        style={{ width: 24, height: 24, tintColor: 'red' }}
                      />
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={{ width: '100%', justifyContent: 'center', height: undefined, aspectRatio: 1, resizeMode: 'contain' }}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Text
                    onPress={() =>
                      navigation.navigate('Detail', {
                        detail: item,
                      })
                    }
                    numberOfLines={3}
                    style={{ marginTop: 10, fontSize: 16 }}>
                    {item.title}
                  </Text>
                  <View style={{}}>
                    <Text style={{ color: 'orange', marginTop: 5, fontSize: 16 }}>⭐{item.rating.rate}</Text>
                    <Text style={{ marginTop: 5, fontSize: 16 }}>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price * rupiah)} </Text>
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
                    onPress={() => {
                      addToCart(item);
                      setModalVisible(true);
                    }}>
                    <Text>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </View>
      <CustomAlertAuto title="Add to Cart" closedText="Close" setModalVisible={setModalVisible} modalVisible={modalVisible} />
    </View>
  );
}

export default Search;
