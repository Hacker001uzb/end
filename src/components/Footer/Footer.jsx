import React from 'react'
import './Footer.css'

import footer from '../../components/img/logo+images (1).png'
import social from '../../components/img/Socials.png'

function Footer() {
  return (
    <div className='Footer'>
        <div className="footer__wrapper">
            <div className="picture">
              <img src={footer} alt="" />
            </div>
            <div className="oak">
              <p>How It Works</p>
              <p>Vegetables</p>
              <p>Contacts</p>
            </div>
            <div className="kombo">
                <img className='social' src={social} alt="" />
                <p className='number'>+380 (68) 443-94-26</p>
                <p className='road'>1678 S. Pioneer Road <br />
Salt Lake City <br />
UT 84104</p>

            </div>
        </div>
    </div>
  )
}

export default Footer