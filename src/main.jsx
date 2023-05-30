import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Routers.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-10/12 xl:w-3/4  mx-auto'>
      <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
