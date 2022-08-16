import "./NavbarStylesheet.css";
import React ,{useState} from 'react';
import IntroImg from "../assets/logo.png";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    
  return (
    <div className="navbar-item">
        <div className="logo">
         <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
                <Link to="/mens" style={{ textDecoration: 'none' }}>Men</Link>
            </li>
            <li>
                <Link to="#" style={{ textDecoration: 'none' }}>Women</Link>
            </li>
            <li>
                <Link to="#" style={{ textDecoration: 'none' }}>Kids</Link>
            </li>
            <li>
                <Link to="#" style={{ textDecoration: 'none' }}>Contact Us</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#3f51b5"}}/>): (<FaBars size={20} style={{color: "#3f51b5"}}/>)}
            
            
        </div>
    </div>


  )
}

export default Navbar