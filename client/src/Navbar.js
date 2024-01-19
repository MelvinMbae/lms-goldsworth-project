import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Navbar({ user, setUser }) {

  const navigate = useNavigate();

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
            .then((response) => {
              setUser("")
              navigate("/", { replace: true })
            })
        }
      })
  }
  return (
    <>
      <div className='navbar-container'>
        <h1 id='header'>GOLDWORTH</h1>
        <ul className='nav'>
          <li>Home</li>
          <li>About</li>
          <Link to={'/CoursesPage'}><li>Courses</li></Link>
        </ul>
        {user ? <span>{user.name} <button className="button" onClick={handleLogout}>Logout</button></span> : <Link to="/login" className="button">Login</Link>}
      </div>
      <Outlet />
    </>
  )
}

export default Navbar;
