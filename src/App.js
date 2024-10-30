// src/App.js
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Nav from './components/nav';
import Hero from './components/hero';
import './App.css';
import Course from './components/Course';
import Mentors from './components/mentors';
import Reviews from './components/reviews';
import Features from './components/features';
import Footer from './components/footer';

function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  // Remove the automatic timeout from App.js
  // Let the SplashScreen component control when it's done

  const handleSplashComplete = () => {
    setSplashVisible(false);
  };

  return (
    <div>
      {isSplashVisible ? (
        <SplashScreen onAnimationEnd={handleSplashComplete} />
      ) : (
        <>
          <Nav />
          <Hero className='mt-12'/>
          <div className="per"><p>OUR COURSES</p></div>
          <div className="products flex flex-wrap justify-between items-center p-4">
            <Course />
          </div>
          <Mentors />
          <Features />
          <Reviews />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;