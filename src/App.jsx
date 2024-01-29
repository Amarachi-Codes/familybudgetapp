import React from 'react';

import './App.css';
import Myheader from './Myheader';
import Hero from './hero';
import Track from './track';
import Signup from './signup';
import More from './More';
import Faq from './Faq';
import Testimonial from './Testimonial';




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
  
 
  
  </>
  )
}

export default App;
