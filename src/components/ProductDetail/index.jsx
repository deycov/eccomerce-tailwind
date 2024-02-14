import React from "react"
import { ShopiStorage } from '../../hooks/useContextShopi'

function ProductDetail() {
  const { setShowProductDetail, product, addToCart } = React.useContext(ShopiStorage);
  
  return(
    <div className="flex flex-col p-3 h-full overflow-auto">
      <button className="absolute right-3 text-red-600 " onClick={() => setShowProductDetail(false) }> X </button>
      <img src={product.image} alt="img product" 
      className="w-full h-40 object-contain"/>
      <label className="text-center font-semibold text-sm text-slate-800"> {product.title} </label>
      <div className="flex justify-between py-1 px-5">
        <p>{product.category}</p>
        <p className="font-bold">{product.price}$</p>
      </div>
        <p className="h-28 xl:h-36 my-5 mx-2 overflow-auto">{product.description}</p>
      <button className="m-auto bottom-0 bg-emerald-600 hover:bg-emerald-700 font-semibold px-20 text-white py-2 rounded"
        onClick={() => addToCart(product.id, product.title, product.price, product.image)}
        > Add to Cart </button>
    </div>
  )
}

export default ProductDetail