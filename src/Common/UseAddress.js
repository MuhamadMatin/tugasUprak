import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export function useAddress() {
  const [address, setAddress] = useState([]);

  async function loadAddress() {
    const storedAddress = await AsyncStorage.getItem('address');
    if (storedAddress !== null) {
      setAddress(JSON.parse(storedAddress));
    }
  }

  async function saveAddress(newAddress) {
    setAddress(newAddress);
    await AsyncStorage.setItem('address', JSON.stringify(newAddress));
    console.log(address);
  }

  async function addAddress(item) {
    let newAddress = [...address];
    newAddress.push({ city: item.city, street: item.street, zipCode: item.zipCode });
    saveAddress(newAddress);
  }

  async function removeAddress(index) {
    let newAddress = [...address];
    newAddress.splice(index, 1);
    setAddress(newAddress);
    await AsyncStorage.setItem('address', JSON.stringify(newAddress));
  }

  useEffect(() => {
    loadAddress();
  }, []);
  return { address, loadAddress, addAddress, removeAddress };
}
