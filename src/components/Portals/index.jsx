import React from "react";
import { createPortal } from "react-dom";
import { ShopiStorage } from "../../hooks/useContextShopi";
import { NavLink } from "react-router-dom";

function PortalError () {
  const { setErrorCondition } = React.useContext(ShopiStorage)
  const containerError = document.getElementById("error");
  return(
    <>
      {createPortal(
        <div className="fixed top-0 z-30 w-full h-full backdrop-blur">
          <div className=" h-full w-full m-auto flex flex-col justify-center items-center rounded">
            <h3 className="bg-red-200 w-2/5 rounded-lg text-center py-10 px-5 mb-10">
              <p className="font-bold text-lg">Espera!🖐️⚠️</p>
              <p>Aun no se puede facturar una venta</p>
              <p>Debes anadir al menos un producto al carrito de compras</p>
              <NavLink
                to='/'
              >
                <p 
                onClick={() => setErrorCondition(false)}
                className="text-red-700 text-lg py-3 hover:underline	">Ir a Home</p>
              </NavLink>
            </h3>
          </div>
        </div>
      , containerError)}
    </>
  )
}

function PortalErrorOrders () {
  const { setErrorCondition } = React.useContext(ShopiStorage)
  const containerError = document.getElementById("error");
  return(
    <>
      {createPortal(
        <div className="fixed top-0 z-30 w-full h-full backdrop-blur">
          <div className=" h-full w-full m-auto flex flex-col justify-center items-center rounded">
            <h3 className="bg-red-200 w-2/5 rounded-lg text-center py-10 px-5 mb-10">
              <p className="font-bold text-lg">Espera!🖐️⚠️</p>
              <p>Aun no has concretado una compra 😥🛒</p>
              <p>📃 Debes realizar al menos una para ver el listado de tus ordenes 📃</p>
              <NavLink
                to='/'
              >
                <p 
                  onClick={() => setErrorCondition(false)}
                  className="text-red-700 text-lg py-3 hover:underline	">Ir a Home
                </p>
              </NavLink>
            </h3>
          </div>
        </div>
      , containerError)}
    </>
  )
}

function PortalBuild () {
  const { setErrorBuild } = React.useContext(ShopiStorage)
  const containerError = document.getElementById("error");
  return(
    <>
      {createPortal(
        <div className="fixed top-0 z-30 w-full h-full backdrop-blur">
          <div className=" h-full w-full m-auto flex flex-col justify-center items-center rounded">
            <h3 className="bg-red-200 w-2/5 rounded-lg text-center py-10 px-5 mb-10">
              <p className="font-bold text-lg">😥 Lo sentimos 😓</p>
              <p>Aun no se puede Visualizar esta parte</p>
              <p>Estamos trabajando para construir esta app </p>
              <NavLink
                to='/'
              >
                <p 
                onClick={() => setErrorBuild(false)}
                className="text-red-700 text-lg py-3 hover:underline	">Por favor vuelve a Home</p>
              </NavLink>
            </h3>
          </div>
        </div>
      , containerError)}
    </>
  )
}

function PortalSuccess () {
  const { setSuccesCondition, setCartItems, setPay } = React.useContext(ShopiStorage)
  const containerSuccess = document.getElementById("success");
  return(
    <>
      {createPortal(
        <div className="fixed top-0 z-30 w-full h-full backdrop-blur">
        <div className=" h-full w-full m-auto flex flex-col justify-center items-center rounded">
          <h3 className="bg-emerald-200 w-2/5 rounded-lg text-center py-10 px-5 mb-10">
            <p className="font-bold text-lg">Perfecto!! 👌👌</p>
            <p>Compra realizada con exito</p>
            <p>Muchas gracias por su compra!🤑 </p>
            <NavLink
              to='/'
            >
              <p 
                onClick={() => {
                  setSuccesCondition(false);
                  setCartItems([]);
                  setPay(0);
                }}
                className="text-emerald-700 text-lg py-3 hover:underline	">
                  Ir a Home por mas compras
              </p>
            </NavLink>
          </h3>
        </div>
      </div>
      , containerSuccess)}
    </>
  )
}

export {PortalError, PortalErrorOrders, PortalSuccess, PortalBuild};