import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
         <NavLink to='/' className='link'><p className='port' style={{fontFamily:"Yatra One"}}>Portfolio</p></NavLink>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className='nav-header'>
          <li>
            <NavLink 
              
              to='/' 
              className='link' 
              // activeClassName='active'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/projects' 
              className='link' 
              // activeClassName='active'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/skills' 
              className='link' 
              // activeClassName='active'
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/resume' 
              className='link' 
              // activeClassName='active'
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <div className='contact'>
        <p>Contact Us</p>
      </div>
    </header>
  );
};

export default Header;
