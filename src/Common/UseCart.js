import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export function useCart() {
  const [cart, setCart] = useState([]);

  async function loadCart() {
    const storedCart = await AsyncStorage.getItem('cart');
    if (storedCart !== null) {
      setCart(JSON.parse(storedCart));
    }
  }

  async function saveCart(newCart) {
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  }

  async function addToCart(item) {
    let newCart = [...cart];
    let itemInCart = newCart.find((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      item.quantity = 1;
      newCart.push(item);
    }
    saveCart(newCart);
  }

  async function removeFromCart(item) {
    let newCart = [...cart];
    let itemInCart = newCart.find((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      if (itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
      } else if ((itemInCart.quantity = 1)) {
        Alert.alert('minimal 1 bang');
      } else {
        newCart = newCart.filter((cartItem) => cartItem.id !== item.id);
      }
    }
    saveCart(newCart);
  }

  async function deleteFromCart(item) {
    let newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  }

  useEffect(() => {
    loadCart();
  }, []);
  return { cart, loadCart, addToCart, removeFromCart, deleteFromCart };
}
