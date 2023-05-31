import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha }
 from 'react-simple-captcha';
const Login = () => {
    const captchaRef =useRef(null);
    const [disable,setDisable]=useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const handlerCaptcha =()=>{
        const user_captcha_value =captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
             setDisable(false)
        } 
    }
    const handlerLogin =event =>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
    }
    return (
        <div className="hero min-h-screen bg-base-200 md:p-8">
            <div className="hero-content md:pe-6 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlerLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email'  placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" required name='captcha' placeholder="text the captcha" className="input input-bordered" />
                            <button  onClick={handlerCaptcha} className="btn mt-2 btn-xs w-full">Captcha match</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;