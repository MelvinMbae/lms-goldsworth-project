import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Dashboard.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-content'>
            <div className='footer-content-div'>
                <h3>Goldworth</h3>
                  <p>About</p>
                  <p>Contact Us</p>
                  <p>Events</p>
            </div>
            <div className='socials'>
                <h3>Coming Soon On</h3>
                <div className='social-icons'>
                  {<FaFacebook />}
                  {<FaTwitter />}
                  {<FaLinkedin />}
                  {<FaInstagram />}
                </div>
            </div>
            </div>
        <hr></hr>
        <div className='footer-below'>
          <div className='footer-copyright'>
          <p>
            @{new Date().getFullYear()} Goldworth. All rights resesrved.
          </p>
          </div>
          <p>Terms & Conditions</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
