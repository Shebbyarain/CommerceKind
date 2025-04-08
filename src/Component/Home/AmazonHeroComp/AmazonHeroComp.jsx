
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './AmazonHeroComp.css';
import HeroImage from '../../../assets/Home-Hero-Graphic-CommerceKind.png';
import purpleGlow from '../../../assets/Home-Hero-Glow-Purple.png';
import GreenGlow from '../../../assets/Home-Hero-Glow-Green.png';

const AmazonHeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-parent">
        <div className="hero-content">
          <h1 className="hero-title">Smart Amazon Management Services</h1>
          <h2 className="hero-subtitle">Low Ranking? We've Got Solutions!</h2>
          <p className="hero-description">
            Low Sales, High Potential? If you have the product, we have the
            <br />
            Strategy - Free Audit to get started
          </p>
          <div className="hero-buttons">
            <button className="hero-button">Free Store Audit</button>
            <a href="#" className="hero-link">Grow Your Amazon Sales <span className="arrow-icon"><FontAwesomeIcon icon={faArrowRight} /></span>
            </a>
          </div>
        </div>
        <div className="hero-image">
            <div className='pic1'>
            <img src={purpleGlow} alt="Before and After Amazon Dashboard Comparison" />
            </div>
          <img src={HeroImage} alt="Before and After Amazon Dashboard Comparison" />
          <div className='pic2'>
          <img src={GreenGlow} alt="Before and After Amazon Dashboard Comparison" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonHeroComponent;