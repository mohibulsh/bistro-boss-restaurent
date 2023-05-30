import React from 'react';

const Navbar = () => {
    const nabIteam = <>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
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