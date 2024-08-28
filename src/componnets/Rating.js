import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import cinnamon from '../assets/images/cinnamon.png'

const Rating = () => {

  const imgRef = useRef(null);

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

  return (
    <>
      <div className='count'>
        <div className='most'>
          <h3>MOST LOVED BOWL BRAND</h3>
        </div>
        <div className='views'>
          <div className='st'>
            <h1><CountUp start={0} end={4.5} duration={3} delay={0.5} />+</h1>
            <p>rating on taste</p>
          </div>

          <div>
            <h1><CountUp start={0} end={20} duration={5} delay={0.5} />L+</h1>
            <p>custombers</p>
          </div>

          <div>
            <h1><CountUp start={0} end={1.1} duration={5} delay={0.5} />C+</h1>
            <p>orders</p>
          </div>
        </div>
        <div className='im' ref={imgRef}><img src={cinnamon} /></div>
        <div className='whowe'>
          <h1>WHO WE ARE AND WHAT WE DO</h1>
          <p>At The Bowl Company, we’ve perfected the art of comfort, convenience, and
            cuisine in one fa‑bowl‑ous serving. With iconic, multi‑cuisine recipes by skilled
            chefs, we serve you a world of flavors in a bowl.</p>
          <h3>Hungry for a culinary cruise around the world?</h3>
          <a href='#' className='btn'>EXPLORE MENU</a>
        </div>
      </div>
    </>
  )
}

export default Rating
