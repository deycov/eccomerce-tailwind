import React from "react";
import { ShopiStorage } from "../../hooks/useContextShopi";

function Bill (){
  const {billItems} = React.useContext(ShopiStorage)
  const [d,m,y] = billItems.date;
  const day = new Date(d,m,y);
  return (
    <div className="p-5 rounded-md shadow-md shadow-slate-300 m-4  h-[32rem]">
      <p className="font-bold">Compra #{980670 + billItems.id}</p>
      <div className="flex flex-row justify-around items-center p-1">
        <p className=" text-lg "> Fecha de realización </p>
        <p className=" text-lg text-blue-500"> {day.toDateString()} </p>
      </div>
      <div className="h-4/6 overflow-auto ">
        {billItems.order.map((item) => (
          <div className="flex flex-row justify-between p-1 mt-2  bg-slate-100 rounded-lg items-center">
            <img src={item.image} className="w-14 h-16 p-1 rounded-lg" />
            <p className="font-thin w-3/4 mb-10">{item.title}</p>
            <p className="font-semibold mt-10">{item.price}$</p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-3 p-1 font-semibold rounded-lg hover:bg-slate-200">
        <p> Monto Total </p>
        <p className="text-emerald-400">{billItems.payment}$</p>
      </div>
    </div>
  )
}

export default Bill;