import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import {useFetchProducts, useFetchCategories, useFetchClothes} from "./useFetchApi";

const ShopiStorage = createContext();

function ShopiProvider({ children }) {
  const navigate = useNavigate();
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
  
  // Estados de orden de pedido
  const [order,setOrder] = React.useState(false);
  
  //Estados de product detail
  const [showProductDetail,setShowProductDetail] = React.useState(false);
  const [product, setProduct] = React.useState({});
  
  //peticiones a la API
  const getProducts = async () => {
    setLoad(true);
    useFetchProducts(API_URL, setItems, setLoad);
  };
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

  const containerProductDetail = (id) => {
    setShowCart(false);
    setShowProductDetail(true);
    items.map(item => {
      if (item.id === id){
        setProduct(item)
      }
    })
  }

  const eraseProduct = (id) => {
    const product = cartItems.find(product => product.id === id)
    setPay(pay - product.price);
    const newCartErase = cartItems.filter(product => product.id !== id);
    console.log(newCartErase)
    setCartItems(newCartErase);
  }

  const createOrder = () => {
    const newOrder = [...cartItems];
    setOrder(newOrder);
    setShowCart(false);
    navigate("/my-order");
  }
  
  // confirmacion para almacenado en ls
  const confirmOrder = (product) => {
    localStorage.setItem('eccomerce-v1', JSON.stringify(product))
  }

  return (
    <ShopiStorage.Provider
      value={{
        //productos 
        items, setItems, load,
        //carrito
        cartCount, addToCart, shoppingCart, cartItems, setCartItems, eraseProduct, pay, showCart, setShowCart,
        //detalles de producto
        showProductDetail, setShowProductDetail, containerProductDetail, product,
        //ordenes
        createOrder,
        //consultas a API
        getProducts,getElectronics, getClothes, getFornitures,
      }}
    >
      {children}
    </ShopiStorage.Provider>
  );
}

export { ShopiProvider, ShopiStorage };
