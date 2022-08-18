import './NavbarStylesheet.css';
import React, { useState } from 'react';
import IntroImg from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar-item">
      <div className="logo">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      {/* FIXME: this way to set the active style will fail since this will
      apply active class in all the link at once, try creating the loops of 
      menu & set active class there.
      */}
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/mens">Men</Link>
        </li>
        <li>
          <Link to="#">Women</Link>
        </li>
        <li>
          <Link to="#">Kids</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#3f51b5' }} />
        ) : (
          <FaBars size={20} style={{ color: '#3f51b5' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
