import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from '../about/About';
import Appointment from '../Appointment/Appointment';
import ContactUs from '../ContactUs/ContactUs';
import Home from '../home/Home';
import Login from '../Login/Login';
import Reviews from '../Reviews/Reviews';

const NavBar = () => {
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
                <Link to="Login">Login</Link>
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
            </div>



            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='About' element={<About />} />
                    <Route path='Appointment' element={<Appointment />} />
                    <Route path='Reviews' element={<Reviews />} />
                    <Route path='ContactUS' element={<ContactUs />} />
                    <Route path='Login' element={<Login />} />
                </Routes>
            </div>

        </div>
    );
};

export default NavBar;