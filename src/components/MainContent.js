// MainContent.js
import React, { useState, useEffect } from 'react';
import Home from './Home';
import Apart from './Apart';
import Rating from './Rating';
import Packing from './Packing';
import ImageDisplay from './ImageDisplay';
import Footer from './Footer';

import regular from '../assets/images/Regular-and-mini-bowls.png';
import product from '../assets/images/Bowl-products.png';
import gravy from '../assets/images/Bowl-with-gravy.png';

const MainContent = () => {

  const images = [
    { id: 1, name: 'Two Bowl sizes for convenience', src: regular },
    { id: 2, name: 'Incredibly lean, spill-free packaging', src: gravy },
    { id: 3, name: 'Sustainable, 100% recyclable materials ', src: product },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, []); 

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Home />
      <Apart />
      <Rating />
      <div className="app">
      <Packing
        images={images}
        onSelectImage={handleImageSelect}
        selectedImage={selectedImage}
      />
      <ImageDisplay image={selectedImage} />
      </div>
      <Footer />
    </>
  );
};

export default MainContent;
