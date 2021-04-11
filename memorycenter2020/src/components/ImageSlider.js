import React, { useState } from 'react';
import useModal from '../hooks/useModal';
import Modal from './Modal';


import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (

    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (

              <div>
                <img src={slide.image} alt='travel' className='image' onClick={openChatModal} />
                <Modal
                  isOpen={isOpenChatModal}
                  closeModal={closeChatModal}
                  title={slide.nombre}
                  text={slide.text}
                  img={slide.image}
                />

              </div>

            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
