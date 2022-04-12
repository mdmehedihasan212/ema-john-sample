import React from 'react';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='custom-link'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/shop'}>Shop</CustomLink>
                <CustomLink to={'/order'}>Order</CustomLink>
                <CustomLink to={'/review'}>Review</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;