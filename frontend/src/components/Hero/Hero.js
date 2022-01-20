import React, { useState, useEffect } from 'react';
import './Hero.css';
import HeroSlider from './HeroSlider';
import SocialLinks from './SocialLinks.';

const Hero = () => {
  //set up function for displaying slider
  const [width, setWidth] = useState(window.innerWidth);
  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section className="hero-section container">
      <div className="hero-text">
        <p className="subtitle">Freshly baked everyday</p>
        <h1>A delicious delight you'll love</h1>
        <button className="hero-cta">Order Here!</button>
      </div>

      <div className="slider-container">{width > 680 && <HeroSlider />}</div>

      <SocialLinks />
    </section>
  );
};

export default Hero;
