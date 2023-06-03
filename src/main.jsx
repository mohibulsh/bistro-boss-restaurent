import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Routers.jsx';
import AuthProvider from './Providers/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='w-10/12 xl:w-3/4  mx-auto'>
          <HelmetProvider>
            <RouterProvider router={router}></RouterProvider>
          </HelmetProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
