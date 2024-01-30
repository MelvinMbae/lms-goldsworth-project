import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { appContext } from './utils/appContext';
import { MdLogout } from 'react-icons/md';

function Navbar() {

  const navigate = useNavigate();

  const { user , session  , setUser } = useContext(appContext)

  function handleLogout() {
    fetch("/logout", {
      "method": "DELETE",
      "headers": {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          response.json()
            .then(() => {
              setUser("")
              navigate("/", { replace: true })
            })
        }
      })
  }

  function SetNavbar({ children }){
    return (        
      <ul className='nav'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/courses'}>Courses</Link>
        { children }
      </ul> 
    )
  }

  return (
      <div className='navbar-container'>
        <h1 id='header'>GOLDWORTH</h1>
        {user.name ? <SetNavbar><Link to={'/dashboard'}>Dashboard</Link></SetNavbar> : <SetNavbar />}
        {user.name ? <span className='button'>{session.user_type}<MdLogout onClick={handleLogout}/></span> : <Link to="/login" className="button">Login</Link>}
      </div>
  )
}

export default Navbar;
