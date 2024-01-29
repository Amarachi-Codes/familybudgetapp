import React from 'react';

import './App.css';
import Myheader from './Myheader';
import Hero from './hero';
import Track from './track';
import Signup from './signup';
import More from './More';
import Faq from './Faq';
import Testimonial from './Testimonial';
import Security from './Security';




function App() {
  return(
  <>
  <Myheader/>
  <Hero/>
  <Track/>
  <Signup name = "Take money management to the Next level"/>
  <More/>
  <Faq/>
  <Testimonial/>
  <Signup name = "Could your dollars use a dose of Next-Gen wisdom?"/>
  <Security/>
 
  
  </>
  )
}

export default App;
