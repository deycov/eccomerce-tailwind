import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className='bg-white flex justify-between items-center fixed top-0 w-full z-10 py-5 px-8 text-sm font-ligth'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            ShopI
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/1'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/2'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/3'
            className={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Chlotes
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
        <li className='font-semibold text-md'>🛒 0</li>
      </ul>
    </nav>
  );
}

export default Nav;
