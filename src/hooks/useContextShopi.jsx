import React, { createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useFetchProducts} from "./useFetchApi";
import { useGetStorage, useSetStorage } from "./useLocalStorage";

const ShopiStorage = createContext();

function ShopiProvider({ children }) {
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
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
  const [stateId, setStateId] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [showCart,setShowCart] = React.useState(false);
  const [pay,setPay] = React.useState(0);
  let cartCount = cartItems.length;
  
  //Estados de ordenes
  const [orders, setOrders] = React.useState([]);
  const [billItems, setBillItems] = React.useState([])
  const [showBill,setShowBill] = React.useState(false);
  
  //Estados de product detail
  const [showProductDetail,setShowProductDetail] = React.useState(false);
  const [product, setProduct] = React.useState({});
  
  //peticiones a la API
  React.useEffect(() => {
    useFetchProducts(API_URL, setItems, setLoad);
    getOrders();
  },[]);  

  React.useEffect(() => 
    setFilteredItems(index), 
  [index]);


  //funciones
  const searched = items.filter((item)=>{
    const itemText = item.title.toLowerCase();
    const searchItem = searchValue.toLowerCase();
    if ( filteredItems !== '' && item.category === filteredItems)
      return itemText.includes(searchItem);
    if ( filteredItems === 'clothes' && (item.category === "men's clothing" || item.category === "women's clothing"))
      return itemText.includes(searchItem);
    if (filteredItems === '')
    return itemText.includes(searchItem);
  });

  const roundAmount = (amount, decimals) => {
    var factor = Math.pow(10, decimals);
    return Math.round(amount * factor) / factor;
  }

  const addToCart = ( id, title, price, image) => {
    if(!cartItems.some(item => item.id === id)){
      setPay(state => {  
        let amount = state + price;
        return roundAmount(amount, 2);
      });
      const newProduct = { id, title, price, image };
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
    setPay(state => {  
      let amount = state - product.price;
      return roundAmount(amount, 2);
    });
    const newCartErase = cartItems.filter(product => product.id !== id);
    setCartItems(newCartErase);
  }

  const createOrder = () => {
    setShowCart(false);
    navigate("/my-order");
  }
  
  // confirmacion para almacenado en ls
  const confirmOrder = (order) => {
    if (order != '' ){
      getOrders(true);
      const date = new Date();
      let actually = [date.getDate(),date.getMonth(),date.getFullYear()];
      const newOrder = {
        id: stateId,
        payment: pay,
        date: actually,
        order
      }
      const storage = [newOrder, ...orders];
      useSetStorage(storage);
      setSuccesCondition(true);
    }
  }

  const getOrders =  async () => {
    const storage = await useGetStorage();
    let initialValue = []
    if(!storage){
      setOrders(initialValue);
      setStateId(1);
      setErrorCondition(2);
    }
    setOrders(storage);
    setStateId(storage.length + 1)
  }

  const getBill = async (id) => {
    const bill = await orders.find((item) => item.id === id)
    return bill;
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
        createOrder, confirmOrder, getOrders, orders, getBill, billItems, setBillItems, showBill,setShowBill
      }}
    >
      {children}
    </ShopiStorage.Provider>
  );
}

export { ShopiProvider, ShopiStorage };
