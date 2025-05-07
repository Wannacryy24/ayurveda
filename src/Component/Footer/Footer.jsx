import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
            <div className='footer_left_div'>
                <h3>About Us</h3>
                <p>Veerveda Arogya Life empowers wellness through Ayurveda, herbal innovation, and nationwide healthcare initiatives.</p>
            </div>
            <div className='footer_middle_div'> 
                <img src="./leaf_footer.png" alt="" />
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>About</p>
            </div>
            <div className='footer_right_div'>
                <h3>Contact Info</h3>
                <p>📞 +91 9410909079 </p>
                <p>✉️  veerveda10125@gmail.com</p>
                <p>🏠 Anmol Vihar Paper mill road saharanpur 247001 UP</p>
            </div>
    </footer>
  )
}
