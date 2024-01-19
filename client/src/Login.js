import React from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='wrapper'>
      <div className='login-container'>
        <div className='circle-1'></div> 
        <div className='circle-2'></div>
        <div className='form'>
           <h1 id='login-header'>Start Your Journey!</h1>
           <div className='input'>
           <input className='input-text' type='text' placeholder='Email Address' required /> 
           <MdEmail id='icon-1'/> 
           <input className='input-text' type='password' placeholder='Password' required />
           <FaLock id='icon-2' />
           </div>
           <Link to="/dashboard" className="btn">Login</Link>
           <div style={{ position: 'absolute', bottom: '10px' }}>
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Login
