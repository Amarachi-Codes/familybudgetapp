import React from 'react';
import "./signup.css";
import Button from "./Hero.jsx"

const Signup = (Props) => {
  return (
    <div className='signup-container'>
      <h3>{Props.name}</h3>
      <Button/>
      {/* <button>Sign Up</button> */}
    </div>
  )
}

export default Signup
