import { useEffect, useState } from 'react';

export function useFetch() {
  async function fetchApi() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories', {
        // method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        //   key: '399e1db98876dab3c15258a7734c38dd',
        // },
        // body: JSON.stringify({
        //   origin: origin,
        //   destination: destination,
        //   weight: weight,
        //   courier: 'jne',
        // }),
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchApi();
  }, []);
  return { fetchApi };
}
