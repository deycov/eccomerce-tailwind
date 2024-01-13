import React from "react";

function Card({ title, price, image, category }) {
  return (
    <div className='bg-transparent w-56 h-60 flex flex-col justify-center'>
      <figure className='relative rounded-md w-full cursor-pointer h-4/5'>
        <span className='absolute bg-emerald-100 rounded-lg bottom-0 text-center font-semibold text-sm px-4 mx-1 my-1 opacity-75'>
          {category}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={image}
          alt='photoBike'
        />
        <button className='absolute bg-white flex justify-center items-center w-7 h-7 m-2 font-semibold text-xl rounded-full top-0 right-0'>
          +
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='font-thin'>{title}</span>
        <span className='font-medium text-emerald-600'>{price}$</span>
      </p>
    </div>
  );
}

export default Card;
