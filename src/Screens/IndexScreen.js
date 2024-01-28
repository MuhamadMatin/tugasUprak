import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Loader from '../Common/Loader';
import Main from '../Bottom/Main';
import Search from '../Bottom/Search';
import Cart from '../Bottom/Cart';
import Wishlist from '../Bottom/Wishlist';
import Profile from '../Bottom/Profile';

function Index() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? <Main /> : selectedTab == 1 ? <Search /> : selectedTab == 2 ? <Cart /> : selectedTab == 3 ? <Wishlist /> : <Profile />}
      <View style={{ width: '100%', height: 70, backgroundColor: '#fff', position: 'absolute', bottom: 0, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(0);
          }}
          style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../images/home.png')} style={{ width: 24, height: 24, tintColor:selectedTab==0?'#000':'#bebebe' }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(1);
          }}
          style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../images/search.png')} style={{ width: 24, height: 24, tintColor:selectedTab==1?'#000':'#bebebe' }} />
        </TouchableOpacity>
        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(2);
            }}
            style={{ width: '60%', height: '60%', backgroundColor: '#000', borderRadius: 999, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../images/shop.png')} style={{ width: 24, height: 24, tintColor:selectedTab==2?'yellow':'#bebebe' }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}
          style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../images/hearth.png')} style={{ width: 24, height: 24, tintColor:selectedTab==3?'#000':'#bebebe' }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
          }}
          style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../images/profile.png')} style={{ width: 24, height: 24, tintColor:selectedTab==4?'#000':'#bebebe' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Index;
