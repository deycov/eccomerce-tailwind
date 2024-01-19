import React, { createContext } from "react";
import useFetchProducts from "./useFetchApi";
const ShopiStorage = createContext();

function ShopiProvider({ children }) {
  const API_URL = "https://fakestoreapi.com/products?limit=8";
  const [items, setItems] = React.useState([]);
  const [load, setLoad] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  let cartCount = cartItems.length;

  React.useEffect(() => {
    setLoad(true);
    useFetchProducts(API_URL, setItems, setLoad);
  }, []);

  const addToCart = (item, setItem, id, title, price, image) => {
    if (!item) {
      setItem(true);
      const newProduct = { id, title, price, image };
      setCartItems((product) => [...product, newProduct]);
    } else console.log("Mensaje de error");
  };

  const shoppingCart = async () => {
    console.log(cartItems);
  };

  return (
    <ShopiStorage.Provider
      value={{ items, load, cartCount, addToCart, shoppingCart }}
    >
      {children}
    </ShopiStorage.Provider>
  );
}

export { ShopiProvider, ShopiStorage };
