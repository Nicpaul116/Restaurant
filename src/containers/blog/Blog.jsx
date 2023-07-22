import React from 'react'
import Aboutus from '../../assets/Aboutus.jpg'
import './blog.css'

const Blog = () => {
  return (
    <div id='Blog' className='blog'>
      <div className='Blog_header'>
        <h1>About us</h1>
      </div>
      <div className='Blog_content'>
         <img src={Aboutus} alt='About us'/>
        <div className='blog_info'>
        <h1>Know us better</h1>
         <p>“We ought to be about something beyond moving chicken.
           We ought to be a piece of our client’s lives and the networks in which we serve.”
           Our originator, settled on the choice to close on Sundays in 1946 when he opened hi
           s first eatery in Hapeville, Georgia.
           Having worked seven days in eateries open 24 hours, Truett saw the significance of 
           shutting on Sundays with the goal that
            he and his representatives could set aside one day to rest and love whether they pick – a training we maintain today.</p>
            <button className='blog_button'>Learn more..</button>
        </div>
      </div>
    </div>
  )
}

export default Blog