import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'


const Header = () => (
  <header id="header">
    <div className="inner">
      <div className="image avatar">
        <img src={avatar} alt="Me on a portaledge on the side of El Capitan in Yosemite." />
      </div>
      <h1>
        <strong>I am a coder</strong>, rock climber, skier, traveler, environmentalist and all-around problem solver.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
