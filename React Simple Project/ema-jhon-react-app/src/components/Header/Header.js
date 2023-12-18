import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header-area">
            <div className="site-logo">
                <a href="#">
                    <img src={logo} alt="site logo"/>
                </a>
            </div>
            <div className="main-navbar">
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/review">Order Review</a></li>
                    <li><a href="/manage">Manage Inventory</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;