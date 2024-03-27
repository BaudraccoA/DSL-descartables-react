import React from 'react';

const ExampleCarouselImage = ({ imageUrl }) => {
  return (
    <div>
      <img className="d-block w-100 img-fluid" src={imageUrl} alt="Carousel Image" />
    </div>
  );
};

export default ExampleCarouselImage;
