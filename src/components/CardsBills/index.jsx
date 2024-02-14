import React from "react";
import { ShopiStorage } from "../../hooks/useContextShopi";

function CardsBills ({ id, payment, date, orderNumber, order }){
  const {getBill, billItems, setShowBill,setBillItems} = React.useContext(ShopiStorage);
  const [d,m,y] = date;
  const day = new Date(d,m,y);
  return (
    <div className="p-5 shadow-md shadow-slate-300 cursor-pointer w-full hover:bg-blue-100"
    onClick={ async () => {
      const data = await getBill(id);
      setBillItems(data);
      setShowBill(true);
    }}
    >
      <div className="flex flex-row justify-between items-center p-1">
        <p className="font-bold">Orden de compra #{980670 + id}</p>
        <p className=" text-sm text-blue-500"> {day.toDateString()} </p>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-3 p-1 font-semibold rounded-lg ">
        <p> Monto Total </p>
        <p className="text-emerald-400">{payment}$</p>
      </div>
      <p className="text-sm text-end text-slate-500">Ver mas</p>
    </div>
  )
}

export default CardsBills;