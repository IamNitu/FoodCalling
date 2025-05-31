import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope ,faFacebook,faInstagram} from '@fortawesome/free-regular-svg-icons'

import {Facebook,Instagram,Twitter,Youtube,PhoneCall,MailOpen, Plane,MoveRight} from 'lucide-react';
import { NavLink} from 'react-router-dom';
import HomePage from './HomePage';
import logo from '/logo.avif'

function Navbar() {
  return (
    <>
        <nav>
            <section className='logo-section'>
            <div className='nav-header'>
           
<div className='nav-head'>

<p><PhoneCall  className='nav-head-icon'/> +977 9800450129</p>



<p> <MailOpen className='nav-head-icon'/>  info@foodcalling.com</p></div>

<div className='nav-head1'>
<select className='select-nav'>
    <option value="english">ENGLISH</option>
    <option value="french">FRENCH</option>
 
</select>

  <div className='nav-icons'>
<Facebook  className='lucide-icon'/>
<Instagram  className='lucide-icon' />
<Twitter  className='lucide-icon' />
<Youtube   className='lucide-icon' />
</div>
</div>
   </div> 

   
<div className='main-logo'>
    <img src={logo} alt='' />

       <input type="checkbox" id="nav-toggle" className="nav-toggle" />
<label htmlFor="nav-toggle" className="hamburger">&#9776;</label>
   
    <div className='navlink'>
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/services">Services</NavLink>
<NavLink to="/menu">Menu</NavLink>
<NavLink to="/blogs">Blogs</NavLink>
<NavLink to="/contact"> Contact</NavLink>
<NavLink to="/gallery"> Gallery</NavLink>


{/* <div className='enquiry-btn'>
<button id='enquiry-btnn'>Learn More <MoveRight className='icon-btn' /></button>
</div> */}
    </div>
</div>



            </section>
        </nav>
        
        {/* <HomePage/> */}
    </>
  )
}

export default Navbar;