import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharePages/Footer';
import Navbar from '../SharePages/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;