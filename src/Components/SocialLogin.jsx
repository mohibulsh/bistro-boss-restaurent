import React, { useContext } from 'react';
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { authContext } from '../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const {googleSignIn}=useContext(authContext)
    const navigate =useNavigate()
    const locatin =useLocation()
    const from=locatin.state?.from?.pathname || "/"
    const handlerGoogleSignIn =()=> {
        googleSignIn()
        .then(result=>{
            const googleUser =result.user;
            console.log(googleUser)
            const googleUserPost ={email:googleUser.email, name:googleUser.displayName}
            console.log(googleUser.providerId)
            if(googleUser.providerId){
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(googleUserPost)
                })
                 
                .then(res=>res.json())
                .then(()=>{
                    navigate(from,{ replace: true});  
                })
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='text-center'>
            <p>Or sign up With</p>
            <div className='flex justify-center items-center py-4 gap-4'>
                <div className='border-solid border-2 rounded-full border-sk-100 p-2 text-xl hover:border-gray-500 hover:text-green-300'>
                    < BsFacebook /></div>
                <div onClick={handlerGoogleSignIn} className='border-solid border-2 rounded-full border-sk-100 p-2 text-xl hover:border-gray-500 hover:text-green-300'>
                    <BsGoogle /></div>
                <div className='border-solid border-2 rounded-full border-sk-100 p-2 text-xl hover:border-gray-500 hover:text-green-300'>
                    <BsGithub /></div>
            </div>
        </div>
    );
};

export default SocialLogin;