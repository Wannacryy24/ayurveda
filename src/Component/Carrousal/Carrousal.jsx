import React, { useRef, useEffect, useCallback } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './Cstyles.css'; // Make sure your CSS handles transition properly

export default function Carousel() {
  const timerRef = useRef(null);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    initial: 0,
    renderMode: 'performance',
    duration: 1000, // Transition duration between slides in ms (1 second)
  });

  const startAutoplay = useCallback(() => {
    if (timerRef.current || !slider) return;

    timerRef.current = setInterval(() => {
      slider.current?.next();
    }, 5000); // Autoplay interval of 5 seconds
  }, [slider]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!slider) return;
    startAutoplay();

    return () => stopAutoplay();
  }, [slider, startAutoplay, stopAutoplay]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      style={{ maxWidth: '100%', overflow: 'hidden' }}
    >
      <div className="keen-slider__slide number-slide1">
        <img src="/c1.jpg" alt="Slide 1" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src="/c2.jpg" alt="Slide 2" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src="/c3.jpg" alt="Slide 3" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src="/c4.jpg" alt="Slide 4" />
      </div>
      <div className="keen-slider__slide number-slide5">
        <img src="/c5.jpg" alt="Slide 5" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <img src="/c6.jpg" alt="Slide 6" />
      </div>
    </div>
  );
}
