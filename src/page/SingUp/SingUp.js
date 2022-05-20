import React, { useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../page/hooks/useToken/useToken';
import Loader from '../Loader/Loader';

const SingUp = () => {
    const [createUserWithEmailAndPassword, SingUpUser, SingUpLoading, SingUpError] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [user] = useAuthState(auth);
    const [displayName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [token] = useToken(SingUpUser || GoogleUser);

    let errorData;
    if (SingUpUser || SingUpError || GoogleUser || GoogleError) {
        errorData = SingUpError?.message ? <h1 className=' text-red-500 text-xl'>{SingUpError?.message}</h1> : <h1 className=' text-green-800 text-xl'>i have successfully accessed</h1>
    }

    let Navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    useEffect(() => {

        if (token || user) {
            Navigate(from, { replace: true })
        }
    }, [Navigate,from,user,token])

    const profile = async () => {

        createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        await sendEmailVerification(email);
    }
    if (SingUpLoading || user) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div className="mx-auto items-center mt-10 w-1/2 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <h1 className="text-2xl font-bold">SingUp now!</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" className="input text-xl text-green-600 input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input text-xl text-green-600 input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input text-xl text-green-600 input-bordered" />

                                <div>
                                    {errorData}
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className={`btn btn-primary hover:bg-green-700  ${SingUpLoading ? 'loading' : ''}`} onClick={() => profile()}> {SingUpLoading ? 'Processing' : 'SingUp'} </button>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>
                            <div className='text-center p-2' style={{ backgroundImage: `url(https://cdn.lorem.space/images/house/.cache/1000x300/pexels-max-vakhtbovych-5997993.jpg)` }}>
                                <button className={`btn glass capitalize text-blod hover:text-slate-300 ${GoogleLoading ? 'loading' : ''}`} onClick={() => signInWithGoogle()}>{GoogleLoading ? 'Processing' : 'continue with google'} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;