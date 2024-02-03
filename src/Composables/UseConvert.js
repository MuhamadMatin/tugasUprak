import { useState, useEffect } from 'react';

export function useConvert(item) {
  const [rupiah, setRupiah] = useState(null);

  async function getDollar() {
    try {
      const response = await fetch(`https://api.getgeoapi.com/v2/currency/convert?api_key=4e724b2c7f706c7d8703e934afff4a7e297305a9&from=USD&to=IDR&amount=${item?.price}&format=json`, {
        method: 'GET',
      });
      const json = await response.json();
      let convert = json.rates.IDR.rate;
      setRupiah(convert);
      console.log(json.rates.IDR.rate);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDollar();
  }, []);

  return { rupiah };
}
