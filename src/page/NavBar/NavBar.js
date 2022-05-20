import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import About from '../about/About';
import Appointment from '../Appointment/Appointment';
import ContactUs from '../ContactUs/ContactUs';
import auth from '../Firebase/Firebase';
import Home from '../home/Home';
import Login from '../Login/Login';
import Reviews from '../Reviews/Reviews';
import SingUp from '../SingUp/SingUp';
import Loader from '../Loader/Loader';
import Dashboard from '../dashboard/dashboard';
import History from '../dashboard/history';
import Review from '../dashboard/review';
import MyAppointments from '../dashboard/MyAppointments';


const NavBar = () => {
    const [user] = useAuthState(auth);


    const NavBar =
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="About">About</Link>
            </li>
            <li>
                <Link to="Appointment">Appointment</Link>
            </li>
            <li>
                <Link to="Reviews">Reviews</Link>
            </li>
            <li>
                <Link to="ContactUS">Contact Us</Link>
            </li>
            <li>
                {
                    user ? <button className="btn btn-ghost mt-[5px]" onClick={() => signOut(auth)}>Sing Out</button> : <Link to="Login">Login</Link>
                }
            </li>
            <li>
                {
                    user && <Link to="Dashboard">Dashboard</Link>
                }
            </li>
        </>



    return (
        <div>
            <div className="navbar bg-base-100 text-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {NavBar}
                        </ul>
                    </div>
                    <Link className='ml-10' to='/'>Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {NavBar}
                    </ul>
                </div>
                <div>
                    <label  htmlFor="dashboard" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

            </div>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='About' element={<About />} />
                    <Route path='Appointment' element={<PrivateRoute><Appointment /></PrivateRoute>} />
                    <Route path='Reviews' element={<Reviews />} />
                    <Route path='ContactUS' element={<ContactUs />} />
                    <Route path='Login' element={<Login />} />
                    <Route path='SingUp' element={<SingUp />} />
                    <Route path='Dashboard' element={<PrivateRoute> <Dashboard /> </PrivateRoute>}> 

                    <Route index element={<MyAppointments></MyAppointments>} />
                    <Route path="History" element={<History />}/>
                    <Route path="Review" element={<Review />}/>

                    </Route>
                </Routes>
            </div>

        </div>
    );
};

const PrivateRoute = ({ children }) => {
    const [user, loding] = useAuthState(auth);
    let location = useLocation();

    if (loding) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;

}
export default NavBar;