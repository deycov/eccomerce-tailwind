import { ShoppingCartIcon } from "@heroicons/react/24/outline"; 
import { NavLink } from "react-router-dom";

import React, { useContext } from "react";

import { ShopiStorage } from "../../hooks/useContextShopi";

function Nav() {
  const { cartCount, shoppingCart } = useContext(ShopiStorage);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className='bg-white flex justify-between items-center fixed top-0 w-full z-10 py-5 px-8 text-sm font-ligth'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
          >
            ShopI
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelery'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Clothes
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3 '>
        <li className='opacity-75 sm:hidden'> web.deyco@mail.com</li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-order'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            My Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Sign In
          </NavLink>
        </li>
        <li className='font-semibold text-md w-9 hover:cursor-pointer' onClick={shoppingCart}>
          <div className="flex flex-row items-center justify-between rounded-lg p-1 hover:bg-slate-100">
            <ShoppingCartIcon/>
            {cartCount}
          </div>
        </li>
      </ul>
    </nav>
  );
}


export default Nav;
