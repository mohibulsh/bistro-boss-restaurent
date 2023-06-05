import React from 'react';
import { FaBookOpen, FaCalendarAlt, FaHome, FaRev, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineContactMail, MdPayments } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineMenu} from "react-icons/ai";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className=" drawer drawer-side ">
                <label htmlFor="my-drawer-2"
                    className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  bg-[#D1A054]">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/usehome'> <FaHome /> USER HOME</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'> <FaCalendarAlt /> RESERVATION</NavLink></li>
                    <li><NavLink to='/dashboard/payment'><MdPayments /> PAYMENT HISTORY</NavLink></li>
                    <li><NavLink to='/dashboard/mycarts'><FaShoppingCart /> MY CART</NavLink></li>
                    <li><NavLink to='/dashboard/review'><FaRev /> REVIEW</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><FaBookOpen /> MY BOOKING</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />HOME</NavLink></li>
                    <li><NavLink to='/menu'><AiOutlineMenu/> MENU</NavLink></li>
                    <li><NavLink to='/shop'><FaShoppingCart /> SHOP</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><MdOutlineContactMail/> CONTACT</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;

