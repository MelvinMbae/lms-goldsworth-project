import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Navbar({ user, setUser }) {
  console.log('Navbar setUser prop:', setUser);

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
            .then(() => {
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
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/coursespage'>Courses</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>

        </ul>
        {user ? <span>{user.name} <button className="button" onClick={handleLogout}>Logout</button></span> : <Link to="/login" className="button">Login</Link>}
      </div>
      <Outlet />
    </>
  )
}

export default Navbar;
