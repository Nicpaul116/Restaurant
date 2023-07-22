import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
    <div className='component_navbar'>
      <h1>Mhaka's Dine</h1>
      <p className='navbar_1'><a href='#home'>Home</a></p>
      <p className='navbar_2'><a href='#Menu'>Menu</a></p>
      <p className='navbar_3'><a href='#Blog'>Blog</a></p>
      <h4 className='navbar_login'>Sign up / Login</h4>
    </div>
  )
}

export default Navbar
