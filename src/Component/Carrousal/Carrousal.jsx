import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Cstyles.css"

export default function Carrousal() {
  const [sliderRef] = useKeenSlider({
    loop: true,
  })

  return (
    <div ref={sliderRef} className="keen-slider"> 
      <div className="keen-slider__slide number-slide1"><img src="./c1.jpeg" alt="" /></div>
      <div className="keen-slider__slide number-slide2"><img src="./c2.jpg" alt="" /></div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  )
}
