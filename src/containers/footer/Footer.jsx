import React from 'react'
import './footer.css'
import {GrFacebook} from 'react-icons/gr'
import {IoLogoTwitter} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {IoLogoYoutube} from 'react-icons/io'
import {MdLocationOn} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const footer = () => {
  return (
    <div className='container_footer'>
      <div className='footer_company'>
        <div><h3>Company</h3></div>
        <div className='container_footer-company'>
          <div className='footer_company-link'>
            <IoIosArrowDroprightCircle/>
          <p><a href="#a">About Us</a></p>
          </div>
          <div  className='footer_company-link'>
          <IoIosArrowDroprightCircle/>
          <p><a href="#b">Contact Us</a></p>
          </div>
         <div  className='footer_company-link'>
         <IoIosArrowDroprightCircle/>
         <p><a href="#c">Privacy Policy</a></p>
         </div>
         <div  className='footer_company-link'>
         <IoIosArrowDroprightCircle/>
         <p><a href="#d">Terms and Conditions</a></p>
         </div>
        </div>
      </div>
      <div className='container_footer-info1'>
        <div><h3>Contact</h3></div>
        <div className='footer_location'>
          <MdLocationOn/>
          <p>Bolesława Chrobrego 15</p>
        </div>
        <div className='footer_telephone'>
          <BsTelephone/>
          <p>507577636</p>
        </div>
        <div className='footer_email'>
          <MdEmail/>
          <p>info@example.com</p>
        </div>
        <div className='container_footer-info2'>
      <ul>
         <li><GrFacebook/></li>
         <li><IoLogoTwitter/></li>
         <li><IoLogoYoutube/></li>
       </ul>
     </div>
      </div>
     <div className='container_footer-opening'>
      <div><h3>Opening</h3></div>
      <div className='footer_weekdays'>
        <p>Monday - Saturday</p>
        <p>09AM - 09PM</p>
      </div>
      <div className='footer_weekend'>
        <p>Sunday</p>
        <p>10AM - 08PM</p>
      </div>
     </div>
    </div>
  )
}

export default footer