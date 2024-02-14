import React, { useContext } from "react"
import { ShopiStorage } from "../../hooks/useContextShopi"

function CartDetail() {
  const {cartItems, setShowCart, eraseProduct, pay, createOrder} = useContext(ShopiStorage) 

  return (
    <div className="h-full overflow-auto">  
      <button className="absolute top-2 right-3 text-red-600 " onClick={() => setShowCart(false)}> X </button>
      {cartItems == '' && <p className=" p-6 text-center"> Aun no ha seleccionado algun producto para comprar </p> }
      <div className="mb-12">

        {cartItems.map((product)=>(
          <div key={product.id} className="flex flex-row justify-between items-center p-4 hover:bg-slate-100">
              <img src={product.image} className="w-16 h-20"/>  
              <h3 className="px-7 text-center"> {product.title} </h3>
              <p className="text-emerald-600"> {product.price} </p>
              <button className="text-red-600 mb-20" 
              onClick={()=> eraseProduct(product.id)}> x </button>
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