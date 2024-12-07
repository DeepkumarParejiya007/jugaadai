import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import teamlogo from '../assets/dark-team-logo.jpg';
import '../all.css';

export default function SignUp() {

    const [signupInfo, setSignupInfo] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { username, email, password } = signupInfo;
        if (!username || !email || !password) {
            return handleError('username, email and password are required')
        }
        try {
            const url = `http://localhost:5000/api/auth/register`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/signin')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    return( 
        <div className="entryMain">
            <div className="teamIntro">
                <div className="teamLogo">
                    <img src={teamlogo} alt="team logo" />
                </div>
                <div className="teamName">
                    <h1> The Continental Group presents </h1>
                </div>
            </div>
            <div id='signup'>
                <div className='container'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSignup}>
                        <div>
                            <label htmlFor='username'>Username</label>
                            <input
                                onChange={handleChange}
                                type='text'
                                name='username'
                                autoFocus
                                placeholder='Enter your username...'
                                value={signupInfo.username}
                            />
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input
                                onChange={handleChange}
                                type='email'
                                name='email'
                                placeholder='Enter your email...'
                                value={signupInfo.email}
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input
                                onChange={handleChange}
                                type='password'
                                name='password'
                                placeholder='Enter your password...'
                                value={signupInfo.password}
                            />
                        </div>
                        <button type='submit'>Signup</button>
                        <span>Already have an account ?
                            <Link to="/signin"><button>Sign In</button></Link>
                        </span>
                    </form>
                </div>
                <p id="bottom">@All Rights are reserved by JugaadAI</p>
            </div>
            <ToastContainer />
        </div>
    );
}


