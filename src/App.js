import React from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import './App.css'
import Course from './components/Course'
import Mentors from'./components/mentors'
import Reviews from './components/reviews'
import Features from './components/features'
import Footer from './components/footer'
function App() {
  return (
    <div>
    
      <Hero/>
     <Courses/>
      <Mentors/>
      <Features/> 
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default App
