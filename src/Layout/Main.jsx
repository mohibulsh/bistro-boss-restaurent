import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../SharePages/Footer';
import Navbar from '../SharePages/Navbar';

const Main = () => {
    const location=useLocation()
    const isLogin=location.pathname.includes('login')|| location.pathname.includes('signup')
    return (
        <div>
            {isLogin || <Navbar/>}
            <Outlet></Outlet>
            { isLogin || <Footer/>}
        </div>
    );
};

export default Main;