import SocialMediaLinks from '../../Component/SocialMediaLinks/SocialMediaLinks'
import FormWithMap from '../../Layout/FormWithMap'
import './ContactUs.css'

export default function ContactUs() {
  return (
    <div className='Contact_us_div'>
        <img src="/ContactSagar.png" 
            alt="will be available soon" 
            className='contact_sagar_img'/>
        <SocialMediaLinks/>
        <FormWithMap/>
    </div>
  )
}
