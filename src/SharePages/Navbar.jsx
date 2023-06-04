import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';
import {FaShoppingCart } from 'react-icons/fa';
import useCarts from '../Hooks/useCarts';
const Navbar = () => {
  
  const [,data] = useCarts()
  console.log(data)

  const { user, logOut } = useContext(authContext)
  const handlerLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error)
      })
  }
  const nabIteam = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/shop/salad'>Our Shop</Link></li>
    <li><Link to='/secret'>Secret</Link></li>
    <li>
      <Link to='/dashboard/mycarts'>
        <button className="btn bg-black p-2 text-xl border-0 bg-opacity-25">
          <FaShoppingCart/>
          <div className="badge badge-secondary ms-1">+{data?.length || 0}</div>
        </button>
      </Link>
    </li>
    {
      user && user ? <li><button onClick={handlerLogOut}>log Out</button></li>
        : <li><Link to='/login'>Login</Link></li>
    }
  </>
  return (
    <div className="navbar text-white fixed z-10 xl:w-3/4 w-10/12 bg-opacity-20 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {nabIteam}
          </ul>
        </div>
        <a className="normal-case  md:text-2xl xl:text-4xl">Bistro Boss
          <br /> <p className='-mt-2'>Restaurant</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {nabIteam}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;