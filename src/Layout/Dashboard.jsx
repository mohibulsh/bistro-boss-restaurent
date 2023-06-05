import React from 'react';
import { FaBookOpen, FaCalendarAlt, FaHome, FaRev, FaShoppingCart,  FaUsers } from 'react-icons/fa';
import { MdOutlineContactMail, MdPayments } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import {  ImSpoonKnife } from "react-icons/im";
import useCarts from '../Hooks/useCarts';

const Dashboard = () => {
    const [, cart] = useCarts()
    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div style={{ maxWidth: '1480px' }} className="drawer-content w-full flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className=" drawer drawer-side ">
                <label htmlFor="my-drawer-2"
                    className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-black xl:font-bold  bg-[#D1A054]">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/usehome'> <FaHome /> ADMIN HOME</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'> <ImSpoonKnife/> ADD ITEMS</NavLink></li>
                            <li><NavLink to='/dashboard/payment'><MdPayments /> PAYMENT HISTORY</NavLink></li>
                            <li><NavLink to='/dashboard/review'><FaRev /> MANAGE ITEMS</NavLink></li>
                            <li><NavLink to='/dashboard/booking'><FaBookOpen /> MANAGE BOOKINGS</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers /> ALL USERS</NavLink></li>
                        </> : <>

                            <li><NavLink to='/dashboard/usehome'> <FaHome /> USER HOME</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'> <FaCalendarAlt /> RESERVATION</NavLink></li>
                            <li><NavLink to='/dashboard/payment'><MdPayments /> PAYMENT HISTORY</NavLink></li>
                            <li><NavLink to='/dashboard/mycarts'> <span className="flex  p-2 text-xl border-0 bg-opacity-25">
                                <FaShoppingCart />
                            </span>My Cart <div className="badge badge-secondary ms-1">+{cart?.length || 0}</div></NavLink></li>
                            <li><NavLink to='/dashboard/review'><FaRev /> REVIEW</NavLink></li>
                            <li><NavLink to='/dashboard/booking'><FaBookOpen /> MY BOOKING</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />HOME</NavLink></li>
                    <li><NavLink to='/menu'><AiOutlineMenu /> MENU</NavLink></li>
                    <li><NavLink to='/shop'><FaShoppingCart /> SHOP</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><MdOutlineContactMail /> CONTACT</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;

