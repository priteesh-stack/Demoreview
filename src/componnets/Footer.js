import React from 'react';
import logo from '../assets/images/Logo.png'
import face from '../assets/images/faceb.png'
import insta from '../assets/images/insta.jpg'
import twt from '../assets/images/twitter.png'

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="The SnaapFood Company" />
        </div>
        
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/campaigns">Campaigns</a></li>
            <li><a href="/locate">Locate Us</a></li>
            <li><a href="/order">Order Now</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p>support@swiggy.in</p>
          <p>Terms and Conditions</p>
        </div>
        
        <div className="footer-subscribe">
          <h3>SUBSCRIBE</h3>
          <p>Receive notifications of new offers by email</p>
          <input type="text" placeholder="ENTER NAME" />
          <input type="email" placeholder="ENTER EMAIL ID" />
          <a href='#' className='btn'>ORDER NOE</a>
          <div className="footer-rights">© ALL RIGHTS RESERVED</div>
        </div>
      </div>
      
      <div className="footer-social">
        <p>FOLLOW US</p>
        <div className="social-icons">
          <a href="#" className="facebook-icon"><img src={face}/></a>
          <a href="#" className="instagram-icon"><img src={insta}/></a>
          <a href="#" className="twitter-icon"><img src={twt}/></a>
        </div>
      </div>
    </footer>

{/* <div className='Footer-2'>
<div className="footer-content">
  <img src={tomatoImage} alt="Tomatoes and spices" className="footer-image" />
  <div className="footer-rights">© ALL RIGHTS RESERVED</div>
</div>
</div> */}
</>
  );
};

export default Footer;