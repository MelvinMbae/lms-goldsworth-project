import React from 'react'

function Login() {
  return (
    <div className='wrapper'>
      <div className='login-container'>
        <div className='circle-1'></div> 
        <div className='circle-2'></div>
        <div className='form'>
           <h1 id='login-header'>Goldworth</h1>
         <form className='login-form'>
          <input type='text' placeholder='Email Adress' />
          <input type='password' placeholder='Password' />
       </form>
       <button type='submit'>Login</button>

        </div>
      </div>
    </div>
    
  )
}

export default Login
