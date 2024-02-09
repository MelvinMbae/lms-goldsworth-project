import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function Login({ session , setSession , setUser }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleUser(user){
    if("student_id" in user){
      setSession({...session, user_type:"student", user_details:user})
    }
    else if("teacher_id" in user){
      setSession({...session, user_type:"teacher", user_details:user})
    }
    else if("parent_id" in user){
      setSession({...session, user_type:"parent", user_details:user})
    }
  }

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
          r.json().then((r) => {
            setUser(r)
            handleUser(r)
          navigate("/dashboard", { replace: true });

          return fetch('/profile_image').then((r)=>{
            if(r.ok){
              r.json()
              .then((image)=>{
                // console.log(image)
                setSession({...session, user_image:image})
              })
            }
          })
        })
        }
        else {
          throw new Error(`HTTP error ${r}`)
        }
      })
      .catch((error)=>console.error(error))
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
           <MdEmail id='login-icon'/> 
           <input className='input-text' name="password" type='password' value={loginData.password} placeholder='Password' onChange={handleChange} required/>
           <FaLock id='login-iconn' />
           </div>
           <button className="login-btn" type="submit">
           Log In
          </button>
           <div className='centered-container'>
            <Link to="/">Back to home</Link>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default Login
