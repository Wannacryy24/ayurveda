import React from 'react'
import Hero from '../../Component/Hero/Hero'
import './Intro.css'
export default function Introduction() {
  return (
        <div className='introduction_page_div'
          
        >
          <img src="/Lord_Dhanvantari.png" alt="" 
          style={
            { width: '80vw',
              height: '60vh',
              objectFit: 'fill'
            }}

          />

            <Hero/>
        </div>
  )
}
