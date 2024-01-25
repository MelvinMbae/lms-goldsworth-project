import React, { Fragment, useContext } from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { appContext } from './utils/appContext';
import { MdLogout } from 'react-icons/md';

function Navbar() {

  const navigate = useNavigate();
  const { user , setUser } = useContext(appContext)

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

  return (
      <div className='navbar-container'>
        <h1 id='header'>GOLDWORTH</h1>
        <ul className='nav'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/courses'}>Courses</Link>
            {user.name ? <Link to={'/forums'}>Forums</Link> : null}
        </ul>
        {user.name ? <span className='button'>{user.name} <MdLogout onClick={handleLogout}/></span> : <Link to="/login" className="button">Login</Link>}
      </div>
  )
}

export default Navbar;
