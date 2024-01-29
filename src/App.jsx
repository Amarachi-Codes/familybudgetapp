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
import Expensetracker from './Expensetracker';
import Balancetracker from './Balancetracker';




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
  <Expensetracker title="Expense Tracker" description="Track all your daily expenses in one place" placeholder="Describe your Expenses" label="Expenses" />
  <Expensetracker title="Income Tracker" description="Track all your daily income in one place" placeholder="Describe your Income" label="Income"/>
 <Balancetracker/>
  
  </>
  )
}

export default App;
