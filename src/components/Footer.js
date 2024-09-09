import React, { useState } from 'react';
import logo from '../assets/images/Logo.png'
import face from '../assets/images/faceb.png'
import insta from '../assets/images/insta.jpg'
import twt from '../assets/images/twitter.png'
import fresh from '../assets/images/fresh1.png'
import axios from 'axios';

const Footer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = process.env.NODE_ENV === 'production'
                ? '/.netlify/functions/subscribe'
                : 'http://localhost:3001/api/subscribe';
                
                const response = await axios.post(url, { name, email });
                console.log('Server response:', response.data);
                alert('Subscription successful!');
                setName('');
                setEmail('');
            } catch (error) {
                console.error('Subscription failed:', error);
                alert('Subscription failed. Please try again.');
            }
        };


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
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="ENTER NAME"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="ENTER EMAIL ID"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className='btn'>SUBMIT</button>
                        </form>
                    </div>
                </div>

                <div className="footer-social">
                    <p>FOLLOW US</p>
                    <div className="social-icons">
                        <a href="#" className="facebook-icon"><img src={face} /></a>
                        <a href="#" className="instagram-icon"><img src={insta} /></a>
                        <a href="#" className="twitter-icon"><img src={twt} /></a>
                    </div>
                </div>
            </footer>
            <div className='copy-right'>
                <div className='copy-img'><img src={fresh} /></div>
                <div className='copy-txt'><h4>© ALL RIGHTS RESERVED</h4></div>
            </div>
        </>
    );
};

export default Footer;