import React, { createContext } from "react";
import {useFetchProducts, useFetchCategories, useFetchClothes} from "./useFetchApi";
const ShopiStorage = createContext();

function ShopiProvider({ children }) {
  const API_URL = "https://fakestoreapi.com/products";
  const API_LIMIT = "?limit=9";
  const API_JEWELERY = "/category/jewelery"; 
  const API_ELECTRONICS = "/category/electronics"; 
  const API_WOMENS = "/category/women's clothing"; 
  const API_MENS = "/category/men's clothing";
   
  //Estado de carga
  const [load, setLoad] = React.useState(false);
  
  // Estados de productos
  const [items, setItems] = React.useState([]);
  
  // Estados del carrito 
  const [cartItems, setCartItems] = React.useState([]);
  const [showCart,setShowCart] = React.useState(false);
  const [pay,setPay] = React.useState(0)
  let cartCount = cartItems.length;

  //Estados de product detail
  const [showProductDetail,setShowProductDetail] = React.useState(false);
  const [product, setProduct] = React.useState({});


  React.useEffect(() => {
    setLoad(true);
    useFetchProducts(API_URL, API_LIMIT, setItems, setLoad);
  }, []);

  //peticiones a la API
  const getFornitures = async () => {
    setLoad(true);
    await useFetchCategories(setItems, API_URL, API_JEWELERY)
    setLoad(false);
  }
  const getElectronics = async () => {
    setLoad(true);
    await useFetchCategories(setItems, API_URL, API_ELECTRONICS)
    setLoad(false);
  }
  const getClothes = async () => {
    setLoad(true);
    await useFetchClothes(setItems, API_URL, API_WOMENS, API_MENS)
    setLoad(false);
  }

  //funciones
  const addToCart = ( id, title, price, image) => {
    if(!cartItems.some(item => item.id === id)){
      const newProduct = { id, title, price, image };
      setPay(state => state + price);
      setCartItems(product => [...product, newProduct]);
    }
  };

  const shoppingCart = () => {
    setShowProductDetail(false);
    setShowCart(true);
  };

  const containerProductDetail = async (id) => {
    setShowCart(false);
    setShowProductDetail(true);
    items.map(item => {
      if (item.id === id){
        setProduct(item)
      }
    })

    // await fetch(`https://fakestoreapi.com/products/${id}`)
    //   .then( async res => await res.json())
    //   .then( async json => setProduct(json))
  }

  return (
    <ShopiStorage.Provider
      value={{
        //productos 
        items, setItems, load,
        //carrito
        cartCount, addToCart, shoppingCart, cartItems, setCartItems, pay, showCart, setShowCart,
        //detalles de producto
        showProductDetail, setShowProductDetail,
        containerProductDetail, product,
        //consultas a API
        getElectronics, getClothes, getFornitures,
        }}
    >
      {children}
    </ShopiStorage.Provider>
  );
}

export { ShopiProvider, ShopiStorage };
