import React from 'react';
import Login from '../Login/Login';
import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className="relative">
            <div className="textHeader">
                <h2 className="">
                    The quick, brown fox <br className="hidden md:block" />
                    jumps over a{' '}
                    <span className="text-teal-accent-400">lazy dog</span>
                </h2>
                <p className="">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                    quae.
                </p>
                <a href="/about" aria-label="" className="">Learn more</a>
            </div>
            <div className="loginHeader">
                <Login />
            </div>
        </div >
    );
};

export default HomeHeader;