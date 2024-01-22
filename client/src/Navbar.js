import React, { Fragment, useContext } from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { userContext } from './utils/UserContext';

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
              <li><Link to={'/home'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/coursespage'}>Courses</Link></li>
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
