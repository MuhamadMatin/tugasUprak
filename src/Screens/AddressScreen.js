import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import CustomTextInput from '../Custom/CustomTextInput';
import CustomButton from '../Custom/CustomButton';
import { useAddress } from '../Composables/UseAddress';
import CustomAlertAuto from '../Custom/CustomAlertAuto';
import { useFetch } from '../Composables/UseFetch';

function AddressScreen() {
  const { address, addAddress, removeAddress, editAddress } = useAddress();
  const [modalVisible, setModalVisible] = useState(false);
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  async function handleSave() {
    if (!city && !street && !zipCode) {
      setModalVisible(true);
      modalVisible(true);
    } else {
      if (editIndex === null) {
        addAddress({ city, street, zipCode });
      } else {
        editAddress(editIndex, { city, street, zipCode });
        setEditIndex(null);
      }
    }
    setCity('');
    setStreet('');
    setZipCode('');
  }

  async function handleEdit(index) {
    setCity(address[index].city);
    setStreet(address[index].street);
    setZipCode(address[index].zipCode);
    setEditIndex(index);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <CustomTextInput icon={require('../../assets/images/city.png')} value={city} onChangeText={(txt) => setCity(txt)} placeholder={'City of Surabaya'} />
      <CustomTextInput icon={require('../../assets/images/street.png')} value={street} onChangeText={(txt) => setStreet(txt)} placeholder={'St Surabaya 123'} />
      <CustomTextInput keyboardtype={'phone-pad'} icon={require('../../assets/images/zipcode.png')} value={zipCode} onChangeText={(txt) => setZipCode(txt)} placeholder={'Zip 201877'} />
      <CustomButton onPress={handleSave} title={editIndex === null ? 'Add Address' : 'Save'} bgColor={'#080202'} textColor={'#fff'} />
      {address.length === 0 ? (
        <Text style={{ marginTop:15, alignSelf: 'center', fontSize: 18, fontWeight: 500 }}>Address not found</Text>
      ) : (
        <FlatList
          data={address}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key={item.id} style={{ marginTop: 20, marginBottom: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 500 }}>{`Jalan ${item.street}`}</Text>
                <Text style={{ fontSize: 16, fontWeight: 200 }}>{`Kota ${item.city} ${item.zipCode}`}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => handleEdit(index)} style={{ marginRight: 5 }}>
                  <Image source={require('../../assets/images/edit.png')} style={{ width: 22, height: 22, tintColor: 'blue' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeAddress(index)} style={{}}>
                  <Image source={require('../../assets/images/delete.png')} style={{ width: 22, height: 22, tintColor: 'red' }} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      <CustomAlertAuto title="Not empty" closedText="Ok" setModalVisible={setModalVisible} modalVisible={modalVisible} />
    </View>
  );
}

export default AddressScreen;
