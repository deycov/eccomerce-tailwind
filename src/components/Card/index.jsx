import React, { useContext } from "react";
import { ShopiStorage } from "../../hooks/useContextShopi";

function Card({ id, title, price, image, category}) {
  const { addToCart, containerProductDetail } = useContext(ShopiStorage);
  const [select, setSelect]= React.useState(false)

  return (
    <>
      {id ? ( 
        <div
          className={`bg-transparent border-2 py-2 px-2 w-56 h-64 flex flex-col justify-center rounded-xl ${ select ? "border-lime-600" : "border-black"}`}
        >
          <figure className='relative rounded-md w-full cursor-pointer h-4/5'>
            <span className='absolute bg-emerald-100 rounded-lg bottom-0 text-center font-semibold text-sm px-4 mx-1 my-1 opacity-75'>
              {category}
            </span>
            <img
              className='w-full h-full object-contain rounded-lg'
              src={image}
              alt='photo'
              onClick={ () =>
                containerProductDetail(id)
              }
            />
            <button
              className={`absolute flex justify-center items-center w-8 h-8 font-semibold text-xl rounded-full top-0 right-0 shadow-sm ${ select ? "text-lime-600" : "hover:animate-rotate"} `}
              onClick={() => {
                addToCart(id, title, price, image);
                setSelect(true);
              }}
            >
              +
            </button>
          </figure>

          <div className='flex overflow-hidden w-full h-20 justify-between pb-2'>
            <span className='font-thin text-sm'>{title}</span>
            <span className='font-medium text-emerald-600'>{price}$</span>
          </div>
        </div>

        // Version de carga
        ): (
        <div
          className={`bg-transparent border-2 py-2 px-2 w-56 h-64 flex flex-col justify-center rounded-xl ${ select ? "border-lime-600" : "border-slate-200"}`}
        >
          <figure className='relative rounded-md w-full h-4/5'>
          
            <div
              className='w-full h-full object-contain rounded-lg bg-slate-200 animate-pulse'
            />
            <button
              className={`absolute flex bg-slate-300 justify-center items-center w-8 h-8 font-semibold text-xl text-slate-500 rounded-full top-0 right-0 shadow-sm animate-pulse"} `}
              onClick={() => {
                addToCart(id, title, price, image);
                setSelect(true);
              }}
            >
              
            </button>
          </figure>

          <div className='flex overflow-hidden w-full h-20 mt-1 justify-between pb-2 rounded bg-slate-200 animate-pulse'>
            <span className='font-thin text-sm'>{title}</span>
          </div>
        </div>
      )
      }


      
    </>
  );
}

export default Card;
