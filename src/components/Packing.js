import React from 'react';

const Packing = ({ images, onSelectImage, selectedImage }) => {

  

  return (
    <>
    <div className='main-pack'>
      <h1>GOOD THINGS COME IN
      GOOD PACKAGING</h1>
    </div>
    <div className="name-list">
      <ul className='list-li'>
        {images.map((image) => (
          <li
            key={image.id}
            onClick={() => onSelectImage(image)}
            className={selectedImage && selectedImage.id === image.id ? 'active' : ''}
          >
            {image.name}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Packing;