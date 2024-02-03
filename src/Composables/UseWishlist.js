import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  async function loadWishlist() {
    const storedWishlist = await AsyncStorage.getItem('wishlist');
    if (storedWishlist !== null) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }

  async function saveWishlist(newWishlist) {
    setWishlist(newWishlist);
    await AsyncStorage.setItem('wishlist', JSON.stringify(newWishlist));
  }

  async function addToWishlist(item) {
    let newWishlist = [...wishlist];
    let itemInWishlist = newWishlist.find((wishlistItem) => wishlistItem.id === item.id);
    if (itemInWishlist) {
      Alert.alert('sudah ada');
    } else {
      newWishlist.push(item);
    }
    saveWishlist(newWishlist);
  }

  async function deleteFromWishlist(item) {
    let newWishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== item.id);
    setWishlist(newWishlist);
    await AsyncStorage.setItem('wishlist', JSON.stringify(newWishlist));
  }

  async function clearWishlist() {
    setWishlist([]);
    await AsyncStorage.removeItem('wishlist');
  }

  async function iSWishlist(item) {
    if (wishlist.find((wishlistItem) => wishlistItem.id === item.id)) {
      deleteFromWishlist(item);
    } else {
      addToWishlist(item);
    }
  }

  useEffect(() => {
    loadWishlist();
  }, []);
  return { wishlist, loadWishlist, addToWishlist, deleteFromWishlist, clearWishlist, iSWishlist};
}
