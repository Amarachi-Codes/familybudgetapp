import React from 'react';
import "./faq.css";
import ExpandMore from '@mui/icons-material/ExpandMore'


const Faq = () => {
  return (
    <div>
      <h2 className='headind-style'>Frequently asked questions about NextWallet</h2>

      <div className='content-wrapper'>
        <div className='container-wrapper'>
          <h6>Do I need to sign up to use NextWallet?</h6>
          <ExpandMore />
        </div>
        <p>Anyone can access NextWallet’s articles, money management advice, and calculators. However, the only way to get the full benefit of NextWallet is to create a free account and connect all your finances. That let’s us give you the most personalized and relevant insights to build your credit and grow your money.</p>

        <div className='container-wrapper'>
          <h6>Is NextWallet safe and secure?</h6>
          <ExpandMore />
        </div>
        <p>We have several measures in place to keep your personal data personal. Your data is encrypted for enhanced protection, and every account you link is protected by a secure, third-party connection service.</p>

        <div className='container-wrapper'>
          <h6>Is NextWallet free? How does NextWallet make money?</h6>
          <ExpandMore />
        </div>
        <p>NextWallet is entirely free for our account holders. So how do we make money? Our partners compensate us. This may influence which products we review and write about (and where those products appear on the site), but it in no way affects our recommendations or advice, which are grounded in thousands of hours of research. Our partners cannot pay us to guarantee favorable reviews of their products or services.</p>

        <div className='container-wrapper'>
          <h6>Is NextWallet accurate?</h6>
          <ExpandMore />
        </div>
        <p>The accuracy of the information displayed is entirely dependent on the accounts you link with NextWallet. To see the most accurate information, connect all of your bank accounts, credit cards, loans, and your home value, where applicable.</p>
        <p>Have a question you don’t see here?<a href=""> Check out our NextWallet community forum.</a> </p>
      </div>
      

    </div>

  )
}

export default Faq
