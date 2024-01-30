import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text } from 'react-native';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';
import { useAddress } from '../Common/UseAddress';

function AddressScreen() {
  const { address, addAddress, removeAddress } = useAddress();
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <CustomTextInput value={city} onChangeText={(txt) => setCity(txt)} placeholder={'Kota'} />
      <CustomTextInput value={street} onChangeText={(txt) => setStreet(txt)} placeholder={'Jalan'} />
      <CustomTextInput value={zipCode} onChangeText={(txt) => setZipCode(txt)} placeholder={'Kode Pos'} />
      <CustomButton onPress={() => addAddress({ city, street, zipCode })} title="Tambah Alamat" bgColor={'#080202'} textColor={'#fff'} />
      <FlatList
        data={address}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>{`Kota: ${item.city}, Jalan: ${item.street}, Kode Pos: ${item.zipCode}`}</Text>
            <CustomButton onPress={() => removeAddress(index)} title={'add address'} bgColor={'#080202'} textColor={'#fff'} />
          </View>
        )}
      />
    </View>
  );
}

export default AddressScreen;
