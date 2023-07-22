import React from 'react'
import { itemData } from './items'
import './menu.css'
import {specialData} from './special'

const Menu = () => {
  return (
    <div className='menu' id='Menu'>
      <div className='menu_header'><h1>Menu</h1></div>
      <div className='menu_item'>
        {itemData.map((item, index) => {
          return(
            <div key={index} className='item_header'>
              <img src={item.img} alt={item.alt}/>
              <div className='item_info'>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <h3>{item.prize}</h3>
                <button className='item_button'>{item.button}</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='special_heading'><h1>On Special</h1></div>
      <div className='special_menu'>
        {specialData.map((special, index) =>{
          return(
            <div className='special_card' key={index}>
              <img src={special.img} alt={special.alt}/>
              <h3>{special.name}</h3>
              <p>{special.desc}</p>
              <h3>{special.prize}</h3>
              <button className='special_button'>{special.button}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu