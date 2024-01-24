import React, { Fragment, useContext } from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { userContext } from './utils/UserContext';
import { MdLogout } from 'react-icons/md';

function Navbar({ setUser }) {
  // console.log('Navbar setUser prop:', setUser);

  const navigate = useNavigate();
  const location = useLocation()
  const user = useContext(userContext)

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

  function NavBar({ children }){
    return (
      <Fragment>
        <h1 id='header'>GOLDWORTH</h1>
          <ul className='nav'>
              <Link to={'/home'}>Home</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/courses'}>Courses</Link>
              {children}
          </ul>
        {user ? <span className='button'>{user.name} <MdLogout onClick={handleLogout}/></span> : <Link to="/login" className="button">Login</Link>}
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div className='navbar-container'>
        {location.pathname === '/dashboard' ? <NavBar>
                                                  <Link to={'/forums'}>Forums</Link>
                                              </NavBar> : <NavBar />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar;
