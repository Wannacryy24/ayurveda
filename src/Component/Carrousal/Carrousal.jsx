import { useEffect, useState } from 'react';
import './Cstyles.css'
const Carousel = ({ slides, autoSlide = true, autoSlideInterval = 3000 }) => {
  console.log(slides);
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [current, autoSlide, autoSlideInterval]);

  return (
    <div className="carousel">
  <div
    className="carousel-inner"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div key={index} className="carousel-slide">
        <img src={slide.image} alt={slide.alt} />
      </div>
    ))}
  </div>

  <button onClick={prevSlide} className="carousel-button left">←</button>
  <button onClick={nextSlide} className="carousel-button right">→</button>

  <div className="carousel-dots">
    {slides.map((_, idx) => (
      <div
        key={idx}
        className={`carousel-dot ${idx === current ? 'active' : ''}`}
        onClick={() => setCurrent(idx)}
      />
    ))}
  </div>
</div>
  );
};

export default Carousel;
