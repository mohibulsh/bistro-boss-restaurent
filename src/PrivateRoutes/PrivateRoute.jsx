import React from 'react';
import {useContext} from 'react'
import { authContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    const locatin =useLocation()
    if(loading){
        return <progress class="progress w-56"></progress>
    }
    if(user){
        return children
    } 
    return <Navigate to='/login' state={{from:locatin}} replace></Navigate> 
  
};

export default PrivateRoute;