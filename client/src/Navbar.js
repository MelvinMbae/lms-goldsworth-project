import React, { Fragment } from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

function Navbar({user , setUser}) {

  const navigate = useNavigate();
  const location = useLocation()

  function handleLogout(){
    fetch("/logout",{
      "method":"DELETE",
      "headers":{
        "Content-Type":"application/json"
      }
    })
    .then((response) =>{ 
      if(response.ok){
        response.json()
        .then((response) => {
          setUser("")
          navigate("/", {replace:true})
        })
      }
    })
  }

  function NavBar({ children }){
    return (
      <Fragment>
        <h1 id='header'>GOLDWORTH</h1>
          <ul className='nav'>
              <li><Link to={'/home'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/courses'}>Courses</Link></li>
              {children}
          </ul>
        {user ? <span>{user.name} <button className="button" onClick={handleLogout}>Logout</button></span> : <Link to="/login" className="button">Login</Link>}
      </Fragment>
    )
  }

  return (
    <>
      <div className='navbar-container'>
        {location.pathname === '/dashboard' ? <NavBar>
                                                  <li><Link to={'/forums'}>Forums</Link></li>
                                              </NavBar> : <NavBar />}
      </div>
      <Outlet />
    </>
  )
}

export default Navbar;
