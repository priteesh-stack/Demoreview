import React, { useState, useRef, useEffect } from 'react';
import fruit from '../assets/images/bowl.svg'
import wlmp from '../assets/images/world.png'
import cap from '../assets/images/chef-cap.webp'
import  paratha from '../assets/images/Paratha.png'
import paneer from '../assets/images/Paneer-corn.png'
import  manchurian from '../assets/images/Classic-Manchurian.png'
import  pasta from '../assets/images/Pasta.png'
import  chicken from '../assets/images/Chicken-65.png'
import  makhani from '../assets/images/Paneer-makhani-biriyani.png'
import  nawabi from '../assets/images/Nawabi-paneer.png'
import check from '../assets/images/chicken-item.png'
import {FaArrowRight,FaArrowLeft} from "react-icons/fa"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const images = [paratha, paneer, manchurian, pasta, chicken, makhani, nawabi];
const itemNames = ['ParathaPaneer Makhanwala Parotta Bowl', 'Peri Peri Chicken with Egg Corn Rice', 'Classic Manchurian with Chilli Garlic Hakka Noodles', 'Classic Mac & Cheese', 'Chicken ’65 with Chilli Garlic Fried Rice', 'Paneer Makhani Biryani', 'Nawabi Paneer Lababdar with Matar Pulao'];

const Apart = () => {

  const imgRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

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

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ]
  };
    // const slide = [1, 2, 3, 4, 5, 6, 7];
    // const circular_slider = document.querySelector('wrapper'),
    // slides = document.querySelectorAll('.slides');

    // slides.forEach((sliders,i) =>{
    //     sliders.onclick =() => {
    //         circular_slider.style.transform= `rotateZ(${360 / 7 * (i)}deg)`;
    //     }
    // })

//     const [rotationAngle, setRotationAngle] = useState(0);
//   const wrapperRef = useRef(null);
//   const slides = [1, 2, 3, 4, 5, 6, 7];

//   useEffect(() => {
//     if (wrapperRef.current) {
//       wrapperRef.current.style.transform = `rotateZ(${rotationAngle}deg)`;
//     }
//   }, [rotationAngle]);

//   const handleSlideClick = (index) => {
//     setRotationAngle(360 / slides.length * index);
//   };

  
  return (
    <>
      <div className='difrnt'>
        <div className='head'>
            <h1>WHAT SET US APART</h1>
        </div>
        <div className='inbody'>
            <div className='inbody-sub1'>
                <div className='inbody-sub1-img'>
                    <img src={fruit} alt=''/>
                </div>
                <div className='inbody-sub1-txt'>
                    <h3>Bowlful serve of <span>comfort </span>
                    and <span>convenience</span></h3>
                </div>
            </div>
            <div className='inbody-sub2'>
                <div className='inbody-sub2-img'>
                    <img src={wlmp} alt=''/>
                </div>
                <div className='inbody-sub2-txt'>
                    <h3>Multi-cuisine dishes from
                    India and around the world</h3>
                </div>
            </div>
            <div className='inbody-sub3'>
                <div className='inbody-sub3-img'>
                    <img src={cap} alt=''/>
                </div>
                <div className='inbody-sub3-txt'>
                    <h3><span>Chef‑curated recipes </span>
                    perfected to local tastes</h3>
                </div>
            </div>
        </div>

        <div className='pep-im'ref={imgRef}><img src={check}/></div>

        <div className='main-whats'>
        <div className='whats'>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={img} alt={itemNames[idx]} />
              <div className={`item-name ${idx === imageIndex ? 'active' : ''}`}>
                {itemNames[idx]}
              </div>
            </div>
          ))}
        </Slider>
      </div>
        <div className='hot'>
          <h1>WHAT'S HOT</h1>
          <p>A sneak peek at our multi‑cuisine bowls, new entrants,
          and all‑time bestsellers</p>
          <a href='#' className='btn'>ORDER NOE</a>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Apart


// const itemNames = ['ParathaPaneer Makhanwala Parotta Bowl', 'Peri Peri Chicken with Egg Corn Rice', 'Classic Manchurian with Chilli Garlic Hakka Noodles', 'Classic Mac & Cheese', 'Chicken ’65 with Chilli Garlic Fried Rice', 'Paneer Makhani Biryani', 'Nawabi Paneer Lababdar with Matar Pulao'];
{/* <div className='flex-center'>
  <div className='circular-slider flex-center'>
    <ul className='wrapper flex-center' ref={wrapperRef}>
      {slides.map((slideNumber) => (
        <li
          key={slideNumber}
          className='slides'
          style={{ '--img-no': slideNumber }}
          onClick={() => handleSlideClick(slideNumber - 1)}
        >
          <img src={paneer} alt={`Slide ${slideNumber}`} />
        </li>
      ))}
    </ul>
  </div>
</div> */}