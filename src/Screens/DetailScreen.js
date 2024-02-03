import { React, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { useCart } from '../Composables/UseCart';
import { useWishlist } from '../Composables/UseWishlist';
import CustomButton from '../Custom/CustomButton';
import CustomAlertAuto from '../Custom/CustomAlertAuto';
import { useConvert } from '../Composables/UseConvert';

function DetailScreen({ detail, route }) {
  const item = route.params.detail;
  const { rupiah } = useConvert();
  const [modalVisible, setModalVisible] = useState(false);
  const { cart, loadCart, addToCart, removeFromCart, deleteFromCart } = useCart();
  const { wishlist, loadWishlist, addToWishlist, removeFromWishlist, deleteFromWishlist, iSWishlist } = useWishlist();

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Text>{item}</Text> */}
      <View>
        <Image
          style={{ backgroundColor: 'white', width: '100%', justifyContent: 'center', height: undefined, aspectRatio: 1, resizeMode: 'contain' }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        {/* title */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 500, marginTop: 20, fontSize: 21 }}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => {
              iSWishlist(item);
            }}>
            <Image source={wishlist.find((wishlistItem) => wishlistItem.id === item.id) ? require('../../assets/images/heart2.png') : require('../../assets/images/hearth.png')} style={{ width: 28, height: 28, tintColor: 'red' }} />
          </TouchableOpacity>
        </View>
        {/* price and rating */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 20 }}>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price * rupiah)} | </Text>
          <Text style={{ alignSelf: 'center', color: 'orange', fontSize: 18 }}>⭐{item.rating.rate}</Text>
        </View>
        {/* description */}
        <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 400 }}>{item.description}</Text>
        <View style={{ marginBottom: 10 }}>
          <CustomButton
            onPress={() => {
              addToCart(item);
              setModalVisible(true);
            }}
            title={'Add to Cart'}
            bgColor={'black'}
            textColor={'white'}
          />
        </View>
        <CustomAlertAuto title="Add to Cart" closedText="Close" setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </View>
    </ScrollView>
  );
}

export default DetailScreen;
