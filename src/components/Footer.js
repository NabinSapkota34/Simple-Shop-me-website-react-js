import "./FooterStyles.css";

import React from 'react'
import {FaFacebook, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"black", marginRight: "2rem"}}/>
                    <div>
                        <p>Kalopul Kathmandu</p>
                        <p>Nepal.</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"black", marginRight: "2rem"}}/>
                9812372521</h4>
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"black", marginRight: "2rem"}}/>
                   nawinssap123@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h5>About Me</h5>
                <p> This is me Nabin Sapkota, frontend developer. I enjoy discussing new projects and design challenges. </p>
                 <div className="social">
                 <FaFacebook size={30} style={{color:"black", marginRight: "1rem"}}/>
                 <FaInstagram size={30} style={{color:"black", marginRight: "1rem"}}/>
                 <FaLinkedin size={30} style={{color:"black", marginRight: "1rem"}}/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;