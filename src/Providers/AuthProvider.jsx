import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { app } from '../../Firebase/confiq.firebase';
 export const authContext =createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
    
    //loging create user
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user
    const loginUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //current user on state change
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])
    // sign out the user
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo ={
         user,
         loading,
         loginUser,
         createUser,
         logOut,

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;