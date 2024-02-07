import React from "react";
import Layout from "../../components/Layout";
import { ShopiStorage } from "../../hooks/useContextShopi";

function MyOrder() {
  const {load, createOrder, pay, cartItems, confirmOrder, errorCondition, setErrorCondition } = React.useContext(ShopiStorage)
  
  React.useEffect(()=>{
    if(cartItems.length === 0)
      setErrorCondition(true);
  },[cartItems])

  return (
    <Layout>
      <div className="grid grid-cols-2 border-2 shadow-black rounded-lg m-auto mt-10 py-9 px-3 w-3/4 h-full">
        <div className='text-center p-5 h-96 overflow-auto '>
        {cartItems == '' && <p className=" p-6 text-center"> Aun no ha seleccionado algun producto para comprar </p> }
        {cartItems != '' && <label className="font-bold"> Products </label> }
          
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-row justify-between items-center p-4 rounded-sm hover:bg-slate-100">              
              <img src={item.image} className="w-16 h-20"/>  
              <h3 className="px-7 snap-center text-center"> {item.title} </h3>
              <button className=" text-red-600 " onClick={()=> eraseProduct(item.id)}> x </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col bg-slate-100 rounded-md drop-shadow shadow-black" > 
          <div className="p-12 h-2/3 text-center">
          <label className="font-bold "> Total amount </label>
            <div className="w-full flex flex-row justify-between">
              <label className="size-10 text-lg"> Price </label>
              <label> {pay} </label>
            </div>  
            <div className="w-full flex flex-row justify-between">
              <label className="size-10 text-lg"> Discount rate </label>
              <label className="text-emerald-600"> 0% </label>
            </div>
            <div className="w-full mt-9 flex flex-row justify-between">
              <label className="font-semibold size-28 text-lg"> Total </label>
              <label className="font-bold"> {pay}$ </label>
            </div>
          </div>
          <button className="border-2 w-2/4 m-auto border-emerald-600 p-2 text-emerald-600 bg-white hover:bg-emerald-600 shadow-md hover:text-white rounded" 
          onClick={() => confirmOrder(cartItems) }>
            Pay order 
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default MyOrder;
