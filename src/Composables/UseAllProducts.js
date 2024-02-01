import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export function useProducts() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const storedProducts = await AsyncStorage.getItem('products');
    if (storedProducts !== null) {
      setProducts(JSON.parse(storedProducts));
    }
  }

  async function saveProducts(newProducts) {
    setProducts(newProducts);
    await AsyncStorage.setItem('products', JSON.stringify(newProducts));
    console.log(cart);
  }

  async function addProducts(item) {
    let newProducts = [...products];
    // let itemInCart = newProducts.find((cartItem) => cartItem.id === item.id);
    // if (itemInCart) {
    //   itemInCart.quantity += 1;
    // } else {
    //   item.quantity = 1;
    // }
    newProducts.push(item);
    saveCart(newProducts);
  }

  async function deleteProducts(item) {
    let newProducts = products.filter((productsItem) => productsItem.id !== products.id);
    setProducts(newProducts);
    await AsyncStorage.setItem('products', JSON.stringify(newProducts));
  }

  useEffect(() => {
    loadProducts();
  }, []);
  return { products, loadProducts, addProducts, deleteProducts };
}
