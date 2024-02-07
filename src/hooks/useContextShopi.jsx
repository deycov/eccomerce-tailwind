import React, { createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useFetchProducts} from "./useFetchApi";
import { useGetStorage, useSetStorage } from "./useLocalStorage";

const ShopiStorage = createContext();

function ShopiProvider({ children }) {
  const currentPath = window.location.pathname;
  const navigate = useNavigate();
  const API_URL = "https://fakestoreapi.com/products";
  const API_LIMIT = "?limit=9";
  // const API_JEWELERY = "/category/jewelery"; 
  // const API_ELECTRONICS = "/category/electronics"; 
  // const API_WOMENS = "/category/women's clothing"; 
  // const API_MENS = "/category/men's clothing";
   
  //Estado de carga
  const [load, setLoad] = React.useState(false);
  const [succesCondition, setSuccesCondition] = React.useState(false)
  const [errorCondition, setErrorCondition] = React.useState(false)
  const [errorBuild, setErrorBuild] = React.useState(false)
  
  // Estados de productos
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState("");
  
  // Estados del carrito 
  const [cartItems, setCartItems] = React.useState([]);
  const [showCart,setShowCart] = React.useState(false);
  const [pay,setPay] = React.useState(0);
  let cartCount = cartItems.length;
  
  //Estados de ordenes
  const [orders, setOrders] = React.useState([]);
  
  //Estados de product detail
  const [showProductDetail,setShowProductDetail] = React.useState(false);
  const [product, setProduct] = React.useState({});
  
  //peticiones a la API
  React.useEffect(() => {
    setLoad(true);
    useFetchProducts(API_URL, setItems);
    setLoad(false);
    console.log(currentPath)
  },[]);  


  //funciones
  const filtered = (item, searchedItem) => {
    return item.filter(
      (item) =>
        item.category.toLowerCase().includes(searchedItem.toLowerCase())
    );
  };

  const searched = items.filter((item)=>{
    const itemText = item.title.toLowerCase();
    const searchItem = searchValue.toLowerCase();
    return itemText.includes(searchItem);
  });

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
    setShowCart(false);
    navigate("/my-order");

  }
  
  // confirmacion para almacenado en ls
  const confirmOrder = (order) => {
    if (order != '' ){
      const arr = [...orders, order];
      useSetStorage(arr);
      setSuccesCondition(true);
    }
  }

  const getOrders =  async ()  => {
    const storage = await useGetStorage();
    setOrders(storage);
  }

  return (
    <ShopiStorage.Provider  
      value={{
        //productos 
        items, setItems, searchValue, setSearchValue, load, setLoad, API_URL,
        //carrito
        cartCount, addToCart, shoppingCart, searched, cartItems, setCartItems, eraseProduct, setPay, pay, showCart, setShowCart,
        //detalles de producto
        showProductDetail, setShowProductDetail, containerProductDetail, product,
        // Condiciones validadoras
        errorCondition, setErrorCondition, succesCondition, setSuccesCondition, errorBuild, setErrorBuild,
        //ordenes
        createOrder, confirmOrder, getOrders, orders,
      }}
    >
      {children}
    </ShopiStorage.Provider>
  );
}

export { ShopiProvider, ShopiStorage };
