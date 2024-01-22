import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!loginData) return;

    setLoginData({
      username: "",
      password: "",
    })

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((r) => {
        if (r.ok){
          r.json().then((user) => {
          setUser(user)
          navigate("/dashboard", { replace: true });
        });
        }
      })
  }

  function handleChange(e) {
    const nam = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [nam]: value });
  }

  return (
    <div className='wrapper'>
      <div className='login-container'>
        <div className='circle-1'></div> 
        <div className='circle-2'></div>
        <form className='form' onSubmit={handleSubmit}>
           <h1 id='login-header'>Start Your Journey!</h1>
           <div className='input'>
           <input className='input-text' name="email" type='text' value={loginData.email} placeholder='Email Address' onChange={handleChange} required /> 
           <MdEmail id='icon-1'/> 
           <input className='input-text' name="password" type='password' value={loginData.password} placeholder='Password' onChange={handleChange} required/>
           <FaLock id='icon-2' />
           </div>
           <button className="btn" type="submit">
           Log In
          </button>
           <div style={{ position: 'absolute', bottom: '10px' }}>
            <Link to="/">Back to home</Link>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default Login