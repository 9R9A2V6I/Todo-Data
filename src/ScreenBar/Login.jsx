import React, { useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

  const Navigation = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    if (
      localStorage.getItem('email') === email &&
      localStorage.getItem('password') === password
    ) {
      Navigation('/todoWrapper');
    } else {
      setEmailError('User Not Found');
    }
  };

  return (
    <>
      <div className="mainSection">
        <form onSubmit={loginHandler} className="loginForm">
          <h3>Login Here</h3>
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
