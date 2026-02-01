import React from 'react';
import logo from "../assets/logo.png";

const Logo = () => {
    return (
        <div className="flex items-end justify-center">
            <img src={logo} alt="logo" />
            <h1 className="font-bold text-3xl  text-[#303030] -ms-2.5">ZapShift</h1>
        </div>
    );
};

export default Logo;