import React, { useEffect, useState, useRef } from 'react';
import './Carousel3D.css';

const Carousel3D = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef();

  const total = images.length;

  const goTo = (index) => {
    setActiveIndex((index + total) % total);
  };

  const nextSlide = () => {
    goTo(activeIndex + 1);
  };

  const prevSlide = () => {
    goTo(activeIndex - 1);
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => autoPlayRef.current();
    const interval = setInterval(play, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((img, index) => {
        const position = (index - activeIndex + total) % total;
        const className = `carousel-item position-${position}`;
        return (
          <img
            key={index}
            src={img.image}
            alt={`Slide ${index}`}
            className={className}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />

        );
      })}

      {/* Arrows */}
      <button className="carousel-arrow left" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="carousel-arrow right" onClick={nextSlide}>
        &#8594;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
