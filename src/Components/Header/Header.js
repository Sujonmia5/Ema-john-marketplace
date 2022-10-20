import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <input type="checkbox" name="" id="side-bar" />
            <label htmlFor="side-bar" className='icon'>
                <FontAwesomeIcon icon={faBarsProgress} />
            </label>
            <div className='nav'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </nav>

    );
};

export default Header;