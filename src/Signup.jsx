import React from 'react';
import "./signup.css";
import Mybutton from './Mybutton';


const Signup = (Props) => {
  return (
    <div className='signup-container'>
      <h3>{Props.name}</h3>
      <Mybutton/>
      
    </div>
  )
}

export default Signup
