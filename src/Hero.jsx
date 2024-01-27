import React from 'react';
import "./hero.css";
import card from "./images/card.png";
import familybudget from "./images/familybudget.png";

function Hero() {
  return (
    <div className='div-wrapper'>
        <div className='title-wrapper'>
      <h2>Financial clarity all in one place.</h2>
      <p>Track your money and credit together, and the Nexts will help you plan for what’s next.</p>
        <button>SIGN UP</button>
        </div>
        <div className='image-wrapper'>
            <img src={familybudget} className='image2' alt="" />
        </div>
        <div>
            <img src={card} className='card-img' alt="" srcset="" />
        </div>
    </div>
  )
}

export default Hero
