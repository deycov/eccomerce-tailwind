import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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

      <ul className='flex items-center gap-3'>
        <li className='opacity-75'> web.deyco@mail.com</li>
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
        <li className='font-semibold text-md hover:cursor-pointer' onClick={shoppingCart}>
          🛒 {cartCount}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
