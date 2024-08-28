import React, { useRef, useEffect, useState } from 'react';
import pepper from '../assets/images/Pepper.png'
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import image1 from '../assets/images/im1.jpg';
import image2 from '../assets/images/im2.jpeg';
import image3 from '../assets/images/im3.png';
import image4 from '../assets/images/im4.jpeg';
import image5 from '../assets/images/im5.png';
import image6 from '../assets/images/im1.jpg';
import image7 from '../assets/images/im2.jpeg';
import image8 from '../assets/images/Classic-Manchurian-chilli-garlic-Hakka-noodles.png'



const reviews = [
  {
    name: "Khushi Kaur",
    location: "Hyderabad",
    rating: 5,
    comment: "I was so hungry and then I saw the special dish of you guys peri-peri chicken with egg and corn rice. The way it looked in the picture that is tasty and tasted the same very delicious. I'm in love with it. Going forward for sure I'm going to order just this whenever I'm hungry, sad, happy and what not"
  },

  {
    name: "Jeesha",
    location: "chennai",
    rating: 5,
    comment: "Their desserts are yummiest and far better than some cafes and lunch bowls are worth every penny. very good and friendly customer service!"
  },

  {
    name: "Mukesh Bakshi",
    location: "chennai",
    rating: 5,
    comment: "The food surprises me everyday with a better smile — You guys are VERA LEVEL !!! Thank you team Bowl company for feeding with amazing taste every-time —- WOW !!"
  },

  {
    name: "Nikhil Prabhu",
    location: "Bengaluru",
    rating: 5,
    comment: "Tried your veg biryani for the first time and boy, was it yummy. You guys should compete in the next season of MasterChef!"
  },

  {
    name: "Tharun",
    location: "Chennai",
    rating: 5,
    comment: "Best packaging, best taste, right portion, I am hugely impressed. Kudos to your work!"
  },

  {
    name: "Narayani M",
    location: "chennai",
    rating: 5,
    comment: "Whoever made the spaghetti, bless your soul. It was really good. A perfect way to end an exhausting Friday. Thank you so much."
  },

  {
    name: "Tejash",
    location: "Hyderabad",
    rating: 5,
    comment: "One of the best bowls i have ever had. Simple Amazing! This restaurant needs more recognition. Everything was amazing and tasty."
  },
];

const ImageDisplay = ({ image }) => {


  const centralImage = image8;
  const [focusElement, setFocusElement] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6, image7];


  const info = ['dehile', 'Mumbai', 'Bengaluru', 'Kolkata', 'gujarat', 'vadodara', 'anand'];




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
      <div className="image-display">
        {image ? (
          <img src={image.src} alt={image.name} />
        ) : (
          <p>Select an image to display</p>
        )}
      </div>
      <div className='im-pepp' ref={imgRef}><img src={pepper} /></div>


      <div className="carousel">
        <div className='carousel-txt'>
          <h1>BOWL LOTTA LOVE<br />
            FROM YOU</h1>
        </div>
        <div className='main'>
          <div style={{ position: 'relative' }}>
            <FancyCarousel
              images={images}
              setFocusElement={setFocusElement}
              carouselRadius={400}
              peripheralImageRadius={50}
              centralImageRadius={10}
              focusElementStyling={{ border: '2px solid #111110' }}
              autoRotateTime={4}
              borderWidth={8}
              borderHexColor={'111110'}
            />
            <img
              src={centralImage}
              style={{
                position: 'absolute',
                top: '42%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '5px solid #111110',
                boxShadow: ' #111110 0px 0px 20px'
              }}
            />
          </div>

          <div className="info-box-wrapper">
            <h2>{reviews[focusElement].name}</h2>
            <p className='info-parag1'>{reviews[focusElement].location}</p>
            <div className='info-reviews'>
              {[...Array(reviews[focusElement].rating)].map((_, i) => (
                <span key={i} role="img" aria-label="star">⭐</span>
              ))}
            </div>
            <p className='info-parag2'>"{reviews[focusElement].comment}"</p>
          </div>

        </div>
      </div>


    </>
  );
};

export default ImageDisplay;






// const testimonials = [
//   {
//     id: 1,
//     name: "Narayani M",
//     location: "Chennai",
//     rating: 5,
//     comment: "Whoever made the spaghetti, bless your soul. It was really good. A perfect way to end an exhausting Friday. Thank you so much.",
//     image: "Thinking.png"
//   },

//   {
//     id: 2,
//     name: "Narayani M",
//     location: "Chennai",
//     rating: 5,
//     comment: "Whoever made the spaghetti, bless your soul. It was really good. A perfect way to end an exhausting Friday. Thank you so much.",
//     image: "Thinking.png"
//   },

//   {
//     id: 3,
//     name: "Narayani M",
//     location: "Chennai",
//     rating: 5,
//     comment: "Whoever made the spaghetti, bless your soul. It was really good. A perfect way to end an exhausting Friday. Thank you so much.",
//     image: "Thinking.png"
//   },

//   {
//     id: 4,
//     name: "Narayani M",
//     location: "Chennai",
//     rating: 5,
//     comment: "Whoever made the spaghetti, bless your soul. It was really good. A perfect way to end an exhausting Friday. Thank you so much.",
//     image: "Thinking.png"
//   },

//   {
//     id: 5,
//     name: "Narayani M",
//     location: "Chennai",
//     rating: 5,
//     comment: "Whoever made the spaghetti, bless your soul. It was really good. A perfect way to end an exhausting Friday. Thank you so much.",
//     image: "Thinking.png"
//   },

//   {
//     id: 6,
//     name: "Narayani M",
//     location: "Chennai",
//     rating: 5,
//     comment: "Whoever made the spaghetti, bless your soul. It was really good. A perfect way to end an exhausting Friday. Thank you so much.",
//     image: "Thinking.png"
//   },

//   {
//     id: 7,
//     name: "Narayani M",
//     location: "Chennai",
//     rating: 5,
//     comment: "Whoever made the spaghetti, bless your soul. It was really good. A perfect way to end an exhausting Friday. Thank you so much.",
//     image: "Thinking.png"
//   },
//   // Add more testimonial objects here
// ];

// const [currentIndex, setCurrentIndex] = useState(0);
// const circleRef = useRef(null);

// useEffect(() => {
//   const circle = circleRef.current;
//   const items = circle.children;
//   const angle = 360 / items.length;
//   const radius = 250; // Adjust this value to change the circle size

//   Array.from(items).forEach((item, index) => {
//     const rotateAngle = angle * index;
//     item.style.transform = `rotate(${rotateAngle}deg) translate(${radius}px) rotate(-${rotateAngle}deg)`;
//   });
// }, []);

// const rotate = (direction) => {
//   const circle = circleRef.current;
//   const currentRotation = getComputedStyle(circle).getPropertyValue('--rotation');
//   const newRotation = direction === 'next' 
//     ? parseInt(currentRotation) - 120 
//     : parseInt(currentRotation) + 120;

//   circle.style.setProperty('--rotation', newRotation);
//   setCurrentIndex((prevIndex) => 
//     direction === 'next'
//       ? (prevIndex + 1) % testimonials.length
//       : (prevIndex - 1 + testimonials.length) % testimonials.length
//   );
// };








{/* <div className="circular-slider">
      <h1>BOWL LOTTA LOVE FROM YOU</h1>
      <div className="circle" ref={circleRef}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-content">
              <h2>{testimonial.name}</h2>
              <p>{testimonial.location}</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="comment">{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={() => rotate('prev')}>←</button>
        <button onClick={() => rotate('next')}>→</button>
      </div>
    </div> */}