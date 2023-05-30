import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Home/Home';
import Menu from '../SharePages/Menu/Menu';

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
            }
          ]
        },
      ]);


