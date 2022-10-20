import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'

const Login = () => {
    const Navigate = useNavigate()
    const { logInUser } = useContext(AuthContext)
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const submitHandle = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire('Login Successful', '', 'success')
                Navigate(from, { replace: true })
            })
            .catch(error => {

            })
    }

    return (
        <div className='login'>
            <form onSubmit={submitHandle}>
                <h2>Login Now</h2>
                <label htmlFor="email">
                    <p> <small>Email</small></p>
                    <input className='input-field' type="email" name='email' placeholder='Enter your email' required />
                </label>
                <label htmlFor="password">
                    <p> <small>Password</small></p>
                    <input className='input-field' type="password" name='password' placeholder='Enter your password' required />

                </label>
                <div>
                    <button className='submit-btn' type="submit">Login</button>
                </div>
            </form>
            <p className='link'>New to Ema John? <Link to='/register'>Create an account.</Link></p>

        </div>
    );
};

export default Login;