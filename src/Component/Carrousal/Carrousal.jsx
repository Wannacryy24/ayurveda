import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

export default function Carrousal() {
  const [sliderRef] = useKeenSlider({
    loop: true,
  })

  return (
    <div ref={sliderRef} className="keen-slider"> 
      <div className="keen-slider__slide number-slide1"><img src="./1.png" alt="" /></div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  )
}
