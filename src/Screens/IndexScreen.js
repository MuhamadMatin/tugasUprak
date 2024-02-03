import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';
import { React, useEffect, useState } from 'react';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import Main from '../Bottom/Main';
import Search from '../Bottom/Search';
import Cart from '../Bottom/Cart';
import Wishlist from '../Bottom/Wishlist';
import Profile from '../Bottom/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

function IndexScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setSelectedTab(0);
      navigation.setOptions({ title: 'Index' });
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? <Main /> : selectedTab == 1 ? <Search /> : selectedTab == 2 ? <Cart /> : selectedTab == 3 ? <Wishlist /> : <Profile />}
      <View style={{ width: '100%', height: 70, backgroundColor: '#fff', position: 'absolute', bottom: 0, flexDirection: 'row', alignItems: 'center' }}>
        {/* home */}
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(0);
            navigation.setOptions({ title: 'Index' });
          }}
          style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../assets/images/home.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 0 ? '#000' : '#bebebe' }} />
        </TouchableOpacity>
        {/* search */}
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(1);
            navigation.setOptions({ title: 'Search' });
          }}
          style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: selectedTab == 1 ? '#000' : '#b0b0b0', borderRadius: 999 }}>
          <Image source={require('../../assets/images/search.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 1 ? 'red' : 'white' }} />
        </TouchableOpacity>
        {/* cart */}
        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(2);
              navigation.setOptions({ title: 'Cart' });
            }}
            style={{ width: '60%', height: '60%', backgroundColor: '#000', borderRadius: 999, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/images/shop.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 2 ? 'yellow' : '#bebebe' }} />
          </TouchableOpacity>
        </View>
        {/* wishlist */}
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
            navigation.setOptions({ title: 'Wishlist' });
          }}
          style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../assets/images/hearth.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 3 ? '#000' : '#bebebe' }} />
        </TouchableOpacity>
        {/* profile */}
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
            navigation.setOptions({ title: 'Profile' });
          }}
          style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../assets/images/profile.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 4 ? '#000' : '#bebebe' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default IndexScreen;
