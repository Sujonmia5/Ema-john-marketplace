import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import logo from '../../Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);

    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <input type="checkbox" name="" id="side-bar" />
            <label htmlFor="side-bar" className='icon'>
                <FontAwesomeIcon icon={faBarsProgress} />
            </label>
            <div className='nav'>
                {
                    user?.uid ? <p className='text'>welcome to our site <a href=""> {user.email}</a></p> : <></>
                }
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user?.uid ? <button onClick={logOut} to="/login">Logout</button> : <>
                        <NavLink to="/login">Log In</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                }
            </div>
        </nav>

    );
};

export default Header;