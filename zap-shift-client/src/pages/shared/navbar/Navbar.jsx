import React from 'react';
import Logo from '../../../components/Logo';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/coverage">Coverage</NavLink>
        </li>
        <li>
            <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li>
            <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
            <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm rounded-xl text-secondary">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><Logo></Logo></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <NavLink to="/login"><button className="border cursor-pointer border-gray-400 rounded-xl p-2 text-[15px] w-20 font-bold">Sign In</button></NavLink>
                    <NavLink to="/register"><button className="rounded-xl cursor-pointer p-2 text-[15px] w-20 bg-primary font-bold">Sign Up</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;