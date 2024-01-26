import React, { useContext } from "react"
import { ShopiStorage } from "../../hooks/useContextShopi"

function CartDetail() {
  const {cartItems, setShowCart, eraseProduct, pay, createOrder} = useContext(ShopiStorage) 


  return (
    <>  
      <button className="absolute top-2 right-3 text-red-600 " onClick={() => setShowCart(false)}> X </button>
      <div className="flex flex-col justify-center py-1">
        <h3 className=" text-lg text-center">
          Cart 🛒
        </h3>
        <button className="flex justify-between m-auto px-6 py-3 w-3/5 bg-emerald-600 text-white font-semibold rounded hover:bg-emerald-700"
          onClick={createOrder}
        > 
          <label className="hover:cursor-pointer"> Pay </label>
          <label className="bg-white rounded text-black px-2 hover:cursor-pointer" > {pay} </label>
        </button>
      </div>
      
      {cartItems == '' && <p className=" p-6 text-center"> Aun no ha seleccionado algun producto para comprar </p> }

      {cartItems.map((product)=>(
        <div key={product.id} className="flex flex-row justify-between items-center p-4 hover:bg-slate-100">
            
            <button className=" text-red-600 absolute right-2  mb-16 " 
            onClick={()=> eraseProduct(product.id)}> x </button>
            <img src={product.image} className="w-16 h-20"/>  
            <h3 className="px-7 text-center"> {product.title} </h3>
            <p className="text-emerald-600"> {product.price} </p>
        </div>
      ))}
    </>
  )
}

export default CartDetail