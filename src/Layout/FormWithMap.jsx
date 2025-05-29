import React from 'react'
import ContactForm from '../Component/AyurvedaContactForm/ContactForm'
import AdvancedMap from '../Component/Map/GoogleMap'
import './formWithMap.css'

export default function FormWithMap() {
  return (
    <div className='form_with_map'>
        <ContactForm/>
        <AdvancedMap/>
    </div>
  )
}
