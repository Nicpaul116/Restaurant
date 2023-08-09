import React, { useState } from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseLine} from 'react-icons/ri'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='component_navbar'>
      <div>
      <h1>Mhaka's Dine</h1>
      </div>
       <div className='navbar_menu'>
         <p className='navbar_1'><a href='#home'>Home</a></p>
         <p className='navbar_1'><a href='#Menu'>Menu</a></p>
         <p className='navbar_1'><a href='#Blog'>About</a></p>
         <p className='navbar_1'><a href="#contact">Contact</a></p>
       </div>
      <div className='component_navbar-signin'>
        <div>
        <h4 className='navbar_login'><span>Sign up</span></h4>
        </div>
      <div className='navbar_button-login'>
        <button className='navbar_button'>Login</button>
      </div>
      </div>
      <div className='component_navbar-menu'>
        {toggleMenu 
         ?<RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
         :<GiHamburgerMenu color='#fff' size={27} onClick={() => setToggleMenu(true) }/>
        }
        {
          toggleMenu && (
            <div className='navbar_menu-container'>
              <div className='navbar_menu-container-links'>
                <p className='navbar_2'><a href='#home'>Home</a></p>
                <p className='navbar_2'><a href='#Menu'>Menu</a></p>
                <p className='navbar_2'><a href='#Blog'>About</a></p>
                <p className='navbar_2'><a href="#contact">Contact</a></p>
                <div className='component_navbar-signin-links'>
                  <div>
                    <p className='navbar_login'>Sign up</p>
                  </div>
                  <div className='navbar_button-login'>
                    <button className='navbar_button'>Login</button>
                  </div>
               </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
