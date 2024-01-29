import React from 'react';
import "./signup.css"

const Signup = (Props) => {
  return (
    <div className='signup-container'>
      <h3>{Props.name}</h3>
      <button>Sign Up</button>
    </div>
  )
}

export default Signup
