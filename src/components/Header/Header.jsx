import React from 'react'
import './Header.css'
import logo from '../../components/img/logo.png'
import cart from '../../components/img/shopping-cart.png'
import followers from '../../components/img/block.png'
import btn from '../../components/img/btn.png'
import girl from '../../components/img/image 1.png'
import block from '../../components/img/block (3).png'

function Header() {
  return (
    <div className='Header'>
      <div className="header__head">
      <ul className='links'>
        <li className='word'>How It Works</li>
        <li className='word'>Vegetables</li>
        <li className='word'>Contacts</li>
      </ul>
      <div className="logo"><img src={logo} alt="" /></div>
      <div className="cart"><img src={cart} alt="" /></div>
      </div>
      <div className="wrap">
      <div className="header__left">
        <div className="followers"><img src={followers} alt="" /></div>
        <h1>ORGANIC VEGETABLES TO YOUR DIET TODAY!</h1>
        <p>Our expertly curated vegetable baskets are made with the freshest, highest quality vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality vegetables in expertly curated vegetable baskets delivered to you.</p>
        <div className="shop"><img src={btn} alt="" /></div>
        </div>
        <div className="header__right">
          <div className="girl"><img src={girl} alt="" /></div>
          <div className="block"><img src={block} alt="" /></div>
        </div>
    </div>
      </div>
  )
   
}

export default Header