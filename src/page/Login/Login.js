import React, { useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';
import { useForm } from "react-hook-form";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState, useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../page/hooks/useToken/useToken';
import Loader from '../Loader/Loader';



const Login = () => {
    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, SignUser, SignLoading, SignError] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, SendingError] = useSendEmailVerification(auth);
    const [styUser, styLoading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token] = useToken(SignUser || GoogleUser);

    let Navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (token || styUser) {
            Navigate(from, { replace: true })
        }
    }, [token,styUser, from, Navigate])

    let errorData;

    if (GoogleUser || GoogleError || SignUser || SignError) {

        if (GoogleError || GoogleUser) {
            errorData = GoogleError?.message ? <h1 className=' text-red-500 text-xl'>{GoogleError?.message}</h1> : <h1 className=' text-green-800 text-xl'>i have successfully accessed</h1>
        } else if (SignUser || SignError) {
            errorData = SignError?.message ? <h1 className=' text-red-500 text-xl'>{SignError?.message}</h1> : <h1 className=' text-green-800 text-xl'>i have successfully accessed</h1>
        } else if (SendingError) {
            errorData = SendingError?.message ? <h1 className=' text-red-500 text-xl'>{SendingError?.message}</h1> : <h1 className=' text-green-800 text-xl'>i have successfully accessed</h1>
        }

    }
    if (GoogleLoading || SignLoading || styLoading) {
        return <Loader></Loader>
    }

    
    const onSubmit = data => {
        
    };

    return (
        <div>
            <div className="mx-auto items-center mt-10 w-1/2 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-2xl font-bold">Login now!</h1>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("firstName")} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input text-xl text-green-600 input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("LName")} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input text-xl text-green-600 input-bordered" />
                                    <label className="label">
                                        <a href="#n" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <div>
                                        {errorData}
                                        {
                                            SignUser?.user?.emailVerified || SignUser == null ? '' : <button className={`btn btn-primary hover:bg-green-700 ${sending ? 'loading' : ''}`} onClick={async () => {
                                                await sendEmailVerification();
                                                alert('Sent email');
                                            }}  >{sending ? 'Processing' : 'verfiy email'} </button>
                                        }
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className={`btn btn-primary hover:bg-green-700 ${SignLoading ? 'loading' : ''}`} onClick={() => signInWithEmailAndPassword(email, password)}>{SignLoading ? 'Processing' : 'Login'} </button>
                                </div>
                                <div>
                                    <h1>New to Doctors Portal? <Link className=' text-emerald-600' to='/SingUp'>Create new account</Link></h1>
                                </div>
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="divider">OR</div>
                                </div>
                                <div className='text-center p-2' style={{ backgroundImage: `url(https://cdn.lorem.space/images/house/.cache/1000x300/pexels-max-vakhtbovych-5997993.jpg)` }}>
                                    <button className={`btn glass capitalize text-blod hover:text-slate-300 ${GoogleLoading ? 'loading' : ''}`} onClick={() => signInWithGoogle()}>{GoogleLoading ? 'Processing' : 'continue with google'} </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;