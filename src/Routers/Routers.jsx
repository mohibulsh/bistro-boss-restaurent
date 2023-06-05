import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Home/Home';
import Menu from '../SharePages/Menu/Menu';
import Shop from '../ShopPages/Shop';
import Login from '../LoginPage/Login';
import SignUp from '../SignUpPage/SignUp';
import Secret from '../SharePages/Secret';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../Dashboard/MyCart';
import AllUsers from '../Dashboard/Admin/AllUsers';

export  const router = createBrowserRouter([
        {
          path: "/",
          element:<Main/>,
          children:[
            {
                path:'/',
                element:<Home/>
            },
            {
              path:'/menu',
              element:<Menu/>
            },
            {
              path:'/shop/:category',
              element:<Shop></Shop>
            },
            {
              path:'/login',
              element:<Login/>
            },
            {
              path:'/signup',
              element:<SignUp/>
            },
            {
              path:'/secret',
              element:<PrivateRoute><Secret/></PrivateRoute>
            }
          ]
        },
        {
          path:'dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children:[
            {
              path:'mycarts',
              element:<MyCart/>
            },
           {
            path:'allusers',
            element:<AllUsers/>
           }
          ]
        }
      ]);


