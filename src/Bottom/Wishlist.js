import * as React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet, Alert } from 'react-native';
import { useWishlist } from '../Composables/UseWishlist';
import { useCart } from '../Composables/UseCart';

function Wishlist() {
  const { wishlist, loadWishlist, addToWishlist, deleteFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  React.useEffect(() => {
    loadWishlist();
  }, []);
  return (
    <View style={{ flex: 1, paddingBottom: 70, paddingLeft: 10, paddingRight: 10 }}>
      {wishlist.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              alignSelf: 'center',
            }}>
            Wishlist empty
          </Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
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
              <Image
                style={{ width: '100%', justifyContent: 'center', aspectRatio: 1, resizeMode: 'contain' }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={{ marginTop: 10, fontSize: 16 }}>{item.title}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'orange', marginTop: 5, fontSize: 16, marginRight: 5 }}>⭐{item.rating.rate}</Text>
                <Text style={{ marginTop: 5, fontSize: 16 }}>| {item.price} $</Text>
              </View>
              <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                  style={{ paddingTop: 5, paddingBottom: 5, paddingRight: 10 }}
                  onPress={() => {
                    deleteFromWishlist(item);
                  }}>
                  <Image source={require('../../assets/images/delete.png')} style={{ width: 22, height: 22, tintColor: 'red' }} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    addToCart(item);
                  }}>
                  <Text style={{ fontWeight: 500, fontSize: 14 }}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

export default Wishlist;
