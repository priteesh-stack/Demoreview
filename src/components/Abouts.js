import React, { useState, useRef, useEffect } from 'react'
import CountUp from 'react-countup'
import check from '../assets/images/chicken-item.png'
import img1 from '../assets/images/Bowl-company-packages.png'
import img2 from '../assets/images/Bowl-company-boxes.png'
import img3 from '../assets/images/quality-packaging.png'

import logo from '../assets/images/Logo.png'
import face from '../assets/images/faceb.png'
import insta from '../assets/images/insta.jpg'
import twt from '../assets/images/twitter.png'
import fresh from '../assets/images/fresh1.png'

const Abouts = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/subscribe', { name, email });
      console.log('Server response:', response.data);
      alert('Subscription successful!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
      alert('Subscription failed. Please try again.');
    }
  };


  const imgRef = useRef(null);

  const [selectedCity, setSelectedCity] = useState('Bengaluru');

  const cities = [
    { name: 'Bengaluru', icon: '🏛️', locations: ['Banashankari', 'Central Bangalore', 'INR1', 'Kammanahalli/Kalyan Nagar', 'Marathahalli', 'RR Nagar', 'Bellandur', 'Electronic City', 'INR2', 'Koramangala', 'Nagavara & Hennur/Hebbal', 'Whitefield', 'Bhoopasandra', 'HSR', 'JP Nagar', 'Kudlu Gate', 'Rajajinagar', 'Yelahanka'] },
    // { name: 'Mangalore', icon: '🕌', locations: ['Mangalore'] },
    // { name: 'Chennai', icon: '🛕', locations: ['Annanagar', 'OMR Perungudi', 'Perambur', 'Ramapuram', 'Royapettah', 'Vadapalani', 'Velachery'] },
    // { name: 'Hyderabad', icon: '🏰', locations: ['Ameerpet', 'Banjara Hills', 'Kondapur', 'Kothapet/Dilsukhnagar', 'Lingampally & Nalagandla', 'Madhapur', 'Manikonda', 'Nizampet & Pragathi Nagar', 'West Maredpally'] },
  ];



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 1 } // Adjust this value to control when the effect triggers
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const imgRefs = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 1 } // Adjust this value to control when the effect triggers
    );

    if (imgRefs.current) {
      observer.observe(imgRefs.current);
    }

    return () => {
      if (imgRefs.current) {
        observer.unobserve(imgRefs.current);
      }
    };
  }, []);


  const [activeImage, setActiveImage] = useState(0);

  const packagingInfo = [
    {
      text: "Our packaging is optimally designed to minimize component weight",
      image: img1
    },
    {
      text: "Our bowls are made of 100% recyclable polypropylene",
      image: img2
    },
    {
      text: "Our cutlery and bags are compostable and 100% recyclable",
      image: img3
    }
  ];

  return (

    <>

      <div className='about-container'>
        <div className='txt-cont'>
          <h1 className="main-heading">
            EVERYTHING YOU NEED<br />
            TO KNOW ABOUT<br />
            <span className="bold-text">THE BOWL COMPANY</span>
          </h1>
        </div>
        <div className='txt-cont1'></div>
      </div>

      <div className='about-p'>
        <div className='para-1'></div>
        <div className='para-2'>
          <p className='ab-p'>At The Bowl Company, we believe that every meal should be a culinary experience.</p>
          <p>Our story began in early 2017 when we realized there was a dearth for well-packaged, convenient food choices for consumers ordering on Swiggy.</p>
          <p>That's why we set out to create innovative, chef-curated, single-serve meals with multi-cuisine recipes from around the world.</p>
        </div>
      </div>

      <div className="location" id='location-pages'>
        <h1 className="head-location">WHAT ARE OUR DELIVERY LOCATIONS?</h1>
        <div className="city-location">
          {cities.map((city) => (
            <div
              key={city.name}
              className={`flex flex-col items-center cursor-pointer p-4 ${selectedCity === city.name ? 'shadow-lg' : ''}`}
              onClick={() => setSelectedCity(city.name)}
            >
              <div className="location-icon">{city.icon}</div>
              <div className="location-name">{city.name}</div>
              <div className={`w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-300 mt-2 ${selectedCity === city.name ? 'visible' : 'invisible'}`}></div>
            </div>
          ))}
        </div>
        <div className="city-names">
          <div className="allname">
            <br />
            <ul style={{ columns: 3, paddingLeft: '20px', margin: 0 }}>
              {cities.find(city => city.name === selectedCity)?.locations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className='pep-im' ref={imgRef}><img src={check} /></div>

      <div className='count'>
        <div className='most'>
          <h3>MOST LOVED BOWL BRAND</h3>
        </div>
        <div className='views'>
          <div className='st'>
            <h1><CountUp start={0} end={4.5} duration={5} delay={0.5} />+</h1>
            <p>rating on taste</p>
          </div>

          <div>
            <h1><CountUp start={0} end={40} duration={5} delay={0.5} />+</h1>
            <p>Kitchens</p>
          </div>

          <div>
            <h1><CountUp start={0} end={2} duration={5} delay={0.5} />L+</h1>
            <p>customers served</p>
          </div>

          <div>
            <h1><CountUp start={0} end={1.1} duration={5} delay={0.5} />C+</h1>
            <p>bowls prepared</p>
          </div>
        </div>
      </div>


      <div className="kitchen-practices">
        <h1>OUR KITCHEN PRACTICES</h1>
        <p className="subtitle1">
          Our kitchens are where all the magic happens. That's why we do our best to keep
          them neat, clean, and safe for cooking.
        </p>
        <div className="practices-grid">
          <div className="practice-item">
            <div className="icon raw-materials"></div>
            <p>Raw materials are thoroughly washed and sanitized before use</p>
          </div>
          <div className="practice-item">
            <div className="icon surfaces"></div>
            <p>Surfaces in contact with food are sanitized as per a 'Clean As You Go' approach</p>
          </div>
          <div className="practice-item">
            <div className="icon quality-assurance"></div>
            <p>Supplier Quality Assurance program is in place and follows the 'inspect → comply → procure' approach</p>
          </div>
          <div className="practice-item">
            <div className="icon personal-hygiene"></div>
            <p>Personal hygiene is strictly maintained through masks, hairnets, and gloves</p>
          </div>

          <div className="practice-item">
            <div className="icon vaccination"></div>
            <p>All kitchen employees are vaccinated</p>
          </div>
        </div>
      </div>


      <div className="good-packaging">
        <h1>GOOD THINGS COME IN GOOD <br /> PACKAGING</h1>
        <p className="subtitle">
          We strive to maintain quality packaging that is both functional and sustainable.
        </p>
        <div className="content1">
          <div className="text-section">
            {packagingInfo.map((item, index) => (
              <div
                key={index}
                className={`info-item ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <p>{item.text}</p>
                <span className="arrow1">{index === 0 ? '→' : '→'}</span>
              </div>
            ))}
          </div>
          <div className="image-section">
            <img src={packagingInfo[activeImage].image} alt="Packaging" />
          </div>
        </div>
      </div>


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
  )
}

export default Abouts
