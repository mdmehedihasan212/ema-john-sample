import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="header-anchor">
                <a href="./home">Home</a>
                <a href="./shop">Shop</a>
                <a href="./review">Review</a>
                <a href="./contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;