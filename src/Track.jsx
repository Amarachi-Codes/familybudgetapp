import React from 'react';
import "./track.css";

const Track = () => {
  return (
    <>
    <div className='title'>
      <h3>Plan and Track your budgets with NextWallet</h3>
    </div>
    <div className='img-wrapper'>
        <div>
        <img src="https://s3.amazonaws.com/cdns3.nerdwallet.com/img/landing/2021/app-hub/net-worth.png" alt="" srcset="" />
        <h4 className='heading4'>Plan budget</h4>
        <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur et deleniti eligendi sunt incidunt quibusdam Lorem, ipsum dolor!</p>
        </div>
        <div>
        <img src="https://s3.amazonaws.com/cdns3.nerdwallet.com/img/landing/2021/app-hub/cash-flow.png" alt="" srcset="" />
        
        <h4 className='heading4'>Track Budgets</h4>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium, debitis molestiae doloremque ad velit.</p>
        </div>
        <div>
        <img src="https://s3.amazonaws.com/cdns3.nerdwallet.com/img/landing/2021/app-hub/credit-score.png" alt="" srcset="" />
        <h4 className='heading4'>Your Wallet</h4>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora similique natus reiciendis mollitia! Repellendus, consectetur.</p>
        </div>
    </div>
    </>
  )
}

export default Track
