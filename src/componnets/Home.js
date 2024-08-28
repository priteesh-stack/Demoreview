import React, { useState, useEffect, useCallback } from 'react';
import food from '../assets/images/food.png';

const AutoSlider = ({ children, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % React.Children.count(children));
  }, [children]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + React.Children.count(children)) % React.Children.count(children));
  }, [children]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [nextSlide, interval]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children}
      </div>
      <button className="slider-button prev" onClick={prevSlide}>❮</button>
      <button className="slider-button next" onClick={nextSlide}>❯</button>
    </div>
  );
};

const Home = () => {
  return (
    <AutoSlider interval={5000}>
      <section className='home' id='home'>
        <div className='content'>
          <h3>MEETING AFTER MEETING,<br/><span>NO TIME FOR EATING?</span></h3>
          <p>Enjoy small breaks with big meals from around the world in a one-serve.</p>
          <a href='#' className='btn'>Know More</a>
        </div>
        <div className='image'>
          <img src={food} alt='something went wrong'/>
        </div>
      </section>
      <section className='home1' id='home'>
        <div className='content'>
          <h3>MEETING AFTER MEETING,<br/><span>NO TIME FOR EATING?</span></h3>
          <p>Enjoy small breaks with big meals from around the world in a one-serve.</p>
          <a href='#' className='btn'>Know More</a>
        </div>
        <div className='image'>
          <img src={food} alt='something went wrong'/>
        </div>
      </section>
    </AutoSlider>

  );
};

export default Home;