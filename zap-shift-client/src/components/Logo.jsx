import React from 'react';
import logo from "../assets/logo.png";

const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <img src={logo} alt="logo" />
            <h1 className="font-bold text-xl mt-4 text-[#303030] ml-0">ZapShift</h1>
        </div>
    );
};

export default Logo;