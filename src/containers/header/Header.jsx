import React from 'react'
import './header.css'


const Header = () => {
  return (
    <section className='container_header' id='Home'>
      <div className='container_header_title'>
      <div className='header_content'>
      <h1>Savory & Delicious!</h1>
      <p>Best day calls for the Best food</p>
      </div>
      <button className='header_button'>Place Order</button>
    </div>
    </section>
  )
}

export default Header