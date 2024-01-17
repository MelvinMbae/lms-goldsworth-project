import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-container'>
        <h1 id='header'>GOLDWORTH</h1>
        <ul className='nav'>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
            <li>Discussion</li>
        </ul>
        <Link to="/login" className="button">Login</Link>

    </div>
  )
}

export default Navbar;
