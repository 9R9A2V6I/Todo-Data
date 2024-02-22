import React, { useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;



  const Navigation = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email) && !passRegex.test(password)) {
      setEmailError('Invalid Email or Password');
      return;
    } else {
      localStorage.setItem('email',email);
      localStorage.setItem('password',password);
      Navigation('login')
    }
  };

  return (
    <>
      <div className="mainSection">
        <form onSubmit={loginHandler} className="loginForm">
          <h3>Sign Up Here</h3>
          <span style={{ color: 'red' }}>{emailError}</span>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Email or Phone"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <NavLink to="todoWrapper"> */}
          <button type="submit">Log In</button>
          {/* </NavLink> */}
        </form>
      </div>
    </>
  );
}
