import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Carro = () => {
  const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`
  }));

  return (
    <Carousel hasSizeButton={false} hasIndexBoard={false} hasMediaButton={false} hasThumbnails={false} images={images} />
  );
};

export default Carro;