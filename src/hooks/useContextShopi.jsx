import React, { createContext } from "react";
import useFetchProducts from "./useFetchApi";
const ShopiStorage = createContext();

function ShopiProvider({ children }) {
  const API_URL = "https://fakestoreapi.com/products?limit=8";
  
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
    useFetchProducts(API_URL, setItems, setLoad);
  }, []);

  const addToCart = (item, setItem, id, title, price, image) => {
    if (!item) {
      setItem(true);
      const newProduct = { id, title, price, image };
      setPay((state) => state+price)
      setCartItems((product) => [...product, newProduct]);
    } else console.log("Mensaje de error");
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
        items, load,
        //carrito
        cartCount, addToCart, shoppingCart, cartItems, setCartItems, pay, showCart, setShowCart,
        //detalles de producto
        showProductDetail,
        setShowProductDetail,
        containerProductDetail,
        product
        }}
    >
      {children}
    </ShopiStorage.Provider>
  );
}

export { ShopiProvider, ShopiStorage };
