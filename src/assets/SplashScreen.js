// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import techLogo from '../assets/texh-logo.png';
import azionLogo from '../assets/azion-logo.png';
import '../assets/splash.css';

const SplashScreen = ({ onAnimationEnd }) => {
  useEffect(() => {
    // Set the timeout to match the CSS animation duration (17 seconds)
    const timer = setTimeout(() => {
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="splash-screen">
      <div className="logo-container">
        <div className="logo-card">
          <img src={techLogo} alt="Tech Logo" className="logo p-2 bg-zinc-700 rounded" />
          <h1 className="company-name">TechX🥷 </h1>
        </div>
        
        <div className="symbol">🤝</div>
        
        <div className="logo-card">
          <img src={azionLogo} alt="Azion Logo" className="logo p-2 bg-zinc-700 rounded" />
          <h1 className="company-name">Azion</h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
