import './Herostyle.css';
import React from 'react';
import ProductImg from '../assets/user.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const HeroImg = () => {
  return (
    <>
      <div className="hero-item" style={{ position: 'relative' }}>
        <Navbar />
        <div className="main-content">
          <div className="heading">
            <h1>Great Discount on Latest Collection</h1>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo expedita
              debitis dicta sequi accusamus magnam sed vel aut reprehenderit repudiandae fugiat
              suscipit cupiditate, officia quis eaque, perferendis rerum! Nam?
            </p>
          </div>
          <div className="button">
            <Link to="#">Shop now</Link>
          </div>
        </div>
        <div className="images">
          <img className="girl-img" src={ProductImg} alt="ProductImg" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HeroImg;
