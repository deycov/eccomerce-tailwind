import { XMarkIcon } from "@heroicons/react/24/outline";
import {TrashIcon} from "@heroicons/react/24/outline";

import React, { useContext } from "react";
import { ShopiStorage } from "../../hooks/useContextShopi";

function CartDetail() {
  const {cartItems, setShowCart, eraseProduct, pay, createOrder} = useContext(ShopiStorage) 

  return (
    <div className="h-full overflow-auto">  
      <XMarkIcon className="absolute top-0 right-0 text-red-600 w-7 cursor-pointer bg-white rounded-lg " onClick={() => setShowCart(false)}/> 
      {cartItems == '' && <p className=" p-6 text-center"> Aun no ha seleccionado algun producto para comprar </p> }
      <div className="mb-12">

        {cartItems.map((product)=>(
          <div key={product.id} className="flex flex-row justify-between items-center p-4 hover:bg-slate-100">
              <img src={product.image} className="w-16 h-20"/>  
              <h3 className="px-7 text-center"> {product.title} </h3>
              <div className="flex flex-col items-end">
                <p className="text-emerald-600"> {product.price} </p>
                <TrashIcon className="text-red-600 w-4 cursor-pointer" 
                onClick={()=> eraseProduct(product.id)}/> 
              </div>
          </div>
        ))}
      </div>

      <div className="w-full py-3 bg-white fixed bottom-0">
        <button className="flex justify-between m-auto px-6 py-3 w-3/5 bg-emerald-600 text-white font-semibold rounded hover:bg-emerald-700"
          onClick={createOrder}
        > 
          <label className="hover:cursor-pointer"> Pay </label>
          <label className="bg-white rounded text-black px-2 hover:cursor-pointer" > {pay} </label>
        </button>
      </div>
    </div>
  )
}

export default CartDetail