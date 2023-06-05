import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
    onAuthStateChanged,signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../Firebase/confiq.firebase';
import axios from 'axios';
 export const authContext =createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();
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
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{
                    email:currentUser.email
                })
                .then(data=>{
                    console.log(data)
                    localStorage.setItem('access-token',data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])
      //google signin
  const googleSignIn =()=>{
      setLoading(true) 
      return signInWithPopup (auth,googleProvider)
  }
    // sign out the user
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    //update profile 
    const updateLoggedProfile =(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
    }
    const authInfo ={
         user,
         loading,
         loginUser,
         createUser,
         googleSignIn,
         logOut,
         updateLoggedProfile

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;