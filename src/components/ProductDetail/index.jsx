import React from "react"
import { ShopiStorage } from '../../hooks/useContextShopi'

function ProductDetail() {
  const { setShowProductDetail, product, addToCart } = React.useContext(ShopiStorage);
  
  return(
    <>
      <button className="absolute top-2 right-3 text-red-600 " onClick={() => setShowProductDetail(false) }> X </button>
      <figure className="mt-10 flex flex-col justify-center w-full h-52">
        <img src={product.image} alt="img product" 
        className="w-full h-full object-contain"/>
        <label className="p-4 text-center font-semibold text-slate-800"> {product.title} </label>
      </figure>
      <div className="flex justify-between py-5 px-3">
        <p>{product.category}</p>
        <p className="font-bold">{product.price}$</p>
      </div>
      <p className="px-4 h-48 overflow-auto">{product.description}</p>
      <div className="absolute bottom-0 w-full p-4 text-center">
        <button className="bg-emerald-600 hover:bg-emerald-700 font-semibold px-20 text-white py-2 rounded"
        onClick={() => addToCart(product.id, product.title, product.price, product.image)}
        > Add to Cart </button>
      </div>
    </>
  )
}

export default ProductDetail