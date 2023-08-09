import React from 'react'
import Aboutus from '../../assets/Aboutus.jpg'
import './blog.css'

const Blog = () => {
  return (
    <div id='Blog' className='blog'>
      <div className='Blog_header'>
        <h1><span>About us</span></h1>
      </div>
      <div className='blog_wrap'>
      <div className='Blog_content'>
        <div> <img src={Aboutus} alt='About us' className='blog_img'/></div>
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
      <div className='Blog_content2'>
        <div className='Blog_content_Moto'>
          <h1>Motto</h1>
          <p>It is very important for the customer to pay attention to the adipiscing process.
             And if anyone is blinded,
             let it be all explained by pleasure or pleasure, loose, except to
             make them great, so do the ways fall? Great, and the pain of pleasures.</p>
        </div>
        <div className='Blog_content_News'>
          <div className='blog_content_news-header'><h1><span>Newsletter</span></h1></div>
          <div className='blog_content-info'>
          <p>Be the first to know about 
            our new food products</p>
          </div>
          <div className='blog_content-form'>
            <form action="">
              <div className='blog_content-input'>
                <input type="text" placeholder='Enter email' name='Enter email'/>
              </div>
            </form>
            <div className='blog_content-buttonsection'>
              <button  className='Blog_content_button'>Submit</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Blog