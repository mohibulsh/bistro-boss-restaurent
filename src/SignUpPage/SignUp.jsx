import React, { useContext } from 'react';
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { authContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2'
const SignUp = () => {
    const { createUser, updateLoggedProfile } = useContext(authContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const Navigate =useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateLoggedProfile(data.name, data.photo)
                    .then(res => {
                        console.log('user profile update')
                        Swal.fire({
                            title: 'your login successfully',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                        Navigate('/')
                        reset()
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
        console.log(data)
       
    };
    return (
        <>
            <Helmet>
                <title>Bistro Boss/signUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div className="text-center xl:pe-8 lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" name='name' placeholder="name" class="input input-bordered" />
                                {errors.name && <span className='text-red-600 pt-2'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input {...register("photo", { required: true })} type="text" name='photo' placeholder="Photo Url" class="input input-bordered" />
                                {errors.photo && <span className='text-red-600 pt-2'>Photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" name='email' placeholder="email" class="input input-bordered" />
                                {errors.email?.type == 'required' && <span className='text-red-600 pt-2'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                                })} type="password" name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600 pt-2'>Password is required</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600 pt-2'> must be less than 20 character</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600 pt-2'>Minimum six characters, at least one uppercase letter, one lowercase letter and one number</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center pb-2'><small>Already registared? </small><Link className='text-orange-400' to='/login'>Go to log in</Link></p>
                        <div className='text-center'>
                            <p>Or sign up With</p>
                            <div className='flex justify-center items-center py-4 gap-4'>
                                <div className='border-solid border-2 rounded-full border-sk-100 p-2 text-xl hover:border-gray-500 hover:text-green-300'>
                                    < BsFacebook /></div>
                                <div className='border-solid border-2 rounded-full border-sk-100 p-2 text-xl hover:border-gray-500 hover:text-green-300'>
                                    <BsGoogle /></div>
                                <div className='border-solid border-2 rounded-full border-sk-100 p-2 text-xl hover:border-gray-500 hover:text-green-300'>
                                    <BsGithub /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;