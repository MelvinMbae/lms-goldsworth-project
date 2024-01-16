import React from 'react'

function Login() {
  return (
    <div className='login-container'>
      <h1 id='login-header'>Welcome to Goldworth</h1>
      <form className='login'>
        <label>Email Adress<input type='email' /></label>
        <label>Password<input type='password' /></label>
      </form>
      <button className='login-btn'>Login</button>

    </div>
  )
}

export default Login
