import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import CustomTextInput from '../Custom/CustomTextInput';
import CustomButton from '../Custom/CustomButton';
import { useAddress } from '../Composables/UseAddress';
import { useFetch } from '../Composables/UseFetch';

function AddressScreen() {
  const { address, addAddress, removeAddress } = useAddress();
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <CustomTextInput icon={require('../../assets/images/city.png')} value={city} onChangeText={(txt) => setCity(txt)} placeholder={'Kota'} />
      <CustomTextInput icon={require('../../assets/images/street.png')} value={street} onChangeText={(txt) => setStreet(txt)} placeholder={'Jalan'} />
      <CustomTextInput icon={require('../../assets/images/zipcode.png')} value={zipCode} onChangeText={(txt) => setZipCode(txt)} placeholder={'Kode Pos'} />
      <CustomButton onPress={() => addAddress({ city, street, zipCode })} title="Tambah Alamat" bgColor={'#080202'} textColor={'#fff'} />
      <FlatList
        data={address}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginTop: 20, marginBottom: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>{`Jalan ${item.street}`}</Text>
              <Text style={{ fontSize: 16, fontWeight: 200 }}>{`Kota ${item.city} ${item.zipCode}`}</Text>
            </View>
            <TouchableOpacity onPress={() => removeAddress(index)} style={{}}>
              <Image source={require('../../assets/images/delete.png')} style={{ width: 22, height: 22, tintColor: 'red' }} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default AddressScreen;
