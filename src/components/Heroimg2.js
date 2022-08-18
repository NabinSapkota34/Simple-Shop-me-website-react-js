import './Hero2style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Product1 from '../assets/project1.png';
import Product2 from '../assets/project2.png';
import Product3 from '../assets/project3.png';

const Heroimg2 = () => {
  return (
    <>
      <div className="pricing">
        <h4>Our Products</h4>
        <div className="card-container">
          <div className="card">
            <img src={Product1} alt="IntroImg" />
            <Link to="#">Add to Cart</Link>
          </div>

          <div className="card">
            <img className="infra-img" src={Product2} alt="IntroImg" />
            <Link to="#">Add to Cart</Link>
          </div>

          <div className="card">
            <img className="intra-img" src={Product3} alt="IntroImg" />
            <Link to="#">Add to Cart</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroimg2;
