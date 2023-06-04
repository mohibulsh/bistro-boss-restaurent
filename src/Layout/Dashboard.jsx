import React from 'react';
import { FaBookOpen, FaCalendarAlt, FaHome, FaRev, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineContactMail, MdPayments } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
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
            <div className="drawer-side">
                <label htmlFor="my-drawer-2"
                    className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard/usehome'> <FaHome /> USER HOME</Link></li>
                    <li><Link to='/dashboard/reservation'> <FaCalendarAlt /> RESERVATION</Link></li>
                    <li><Link to='/dashboard/payment'><MdPayments /> PAYMENT HISTORY</Link></li>
                    <li><Link to='/dashboard/mycarts'><FaShoppingCart /> MY CART</Link></li>
                    <li><Link to='/dashboard/review'><FaRev /> REVIEW</Link></li>
                    <li><Link to='/dashboard/booking'><FaBookOpen /> MY BOOKING</Link></li>
                    <div className="divider"></div>
                    <li><Link to='/'><FaHome />HOME</Link></li>
                    <li><Link to='/menu'><AiOutlineMenu/> MENU</Link></li>
                    <li><Link to='/shop'><FaShoppingCart /> SHOP</Link></li>
                    <li><Link to='/dashboard/booking'><MdOutlineContactMail/> CONTACT</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;

{/* <li><Link to='/dashboard/usehome'>USER HOME</Link></li>
<li><Link to='/dashboard/reservation'>RESERVATION</Link></li>
<li><Link to='/dashboard/payment'>PAYMENT HISTORY</Link></li>
<li><Link to='/dashboard/mycarts'>MY CART</Link></li>
<li><Link to='/dashboard/review'>ADD REVIEW</Link></li>
<li><Link to='/dashboard/booking'>MY BOOKING</Link></li> */}