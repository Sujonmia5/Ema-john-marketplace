import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/UserContext';
import './Register.css'

const Register = () => {
    const [signupError, setSignupError] = useState('')
    const [error, setError] = useState('')
    const [match, setMatch] = useState('')
    const [password, setPassword] = useState('')
    const { createAccount } = useContext(AuthContext)
    const Navigate = useNavigate()

    const passwordSet = e => {
        if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/.test(e.target.value)) {
            setError('Please give me 6 character ‍and strong password! Ex: 12As@#')
            return;
        }
        else {
            setPassword(e.target.value)
            setError('')
        }
    }
    const conformPassword = (e) => {
        console.log(password);
        if (e.target.value !== password) {
            setMatch("Don't match password")
            return;
        }
        setMatch('')
    }
    const submitHandle = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email, password);
        createAccount(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire('Account create successful', '', "success")
                form.reset()
                Navigate('/login')
            })
            .catch(error => {
                Swal.fire('This email already use', '', "warning")
                console.error(error);
            })
    }
    return (
        <div className='login'>
            {
                error?.message ? <p>{signupError.message}</p> : ""
            }
            <form onSubmit={submitHandle}>
                <h2>Create an new Account</h2>
                <label htmlFor="name">
                    <p> <small>Name</small></p>
                    <input className='input-field' type="text" name='name' placeholder='Enter your name' required />
                </label>
                <label htmlFor="email">
                    <p> <small>Email</small></p>
                    <input className='input-field' type="email" name='email' placeholder='Enter your email' required />
                </label>
                <label htmlFor="">
                    <p> <small>Password</small></p>
                    <input onBlur={passwordSet} className='input-field' type="password" name='password' placeholder='Enter your password' required />
                    {
                        error ? <p className='error'>{error}</p> : <p></p>
                    }
                </label>
                <label htmlFor="conform-password">
                    <p> <small>Conform Password</small></p>
                    <input onBlur={conformPassword} className='input-field' type="password" name='conform-password' placeholder='Enter your conform password' required />
                    {
                        match ? <p className='error'>{match}</p> : <p></p>
                    }
                </label>
                <div>
                    <button className='submit-btn' type="submit">Register</button>
                </div>
            </form>
            <p className='link'>Already have an account? <Link to='/login'>Login?</Link></p>
        </div>
    );
};

export default Register;