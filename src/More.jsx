import React from 'react';
import "./track.css";

const More = () => {
  return (
    <>
    <div className='title'>
      <h2>Make the most of your money with NextWallet</h2>
    </div>
    <div className='img-wrapper'>
        <div className=''>
        <img src="https://s3.amazonaws.com/cdns3.nerdwallet.com/img/landing/2021/app-hub/nw-app_article-image_d.png" alt="" srcset="" />
        <h6 className='heading4'>Supercharge your money savvy with the NextWallet.</h6>
        <p className='description'><a href="">Read the guide</a></p>
        </div>
        <div>
        <img src="https://s3.amazonaws.com/cdns3.nerdwallet.com/img/landing/2021/app-hub/track-expenses_article-image_d.png" alt="" srcset="" />
        
        <h6 className='heading4'>How to track your expenses with NextWallet</h6>
        <p className='description'><a href="">Learn about cash flow</a></p>
        </div>
        <div>
        <img src="https://s3.amazonaws.com/cdns3.nerdwallet.com/img/landing/2021/app-hub/manage-credit_article-image_d.png" alt="" srcset="" />
        <h6 className='heading4'>How NextWallet helps you keep up with your credit</h6>
        <p className='description'><a href="">Credit score 101</a></p>
        </div>
    </div>
    </>
  )
}

export default More;