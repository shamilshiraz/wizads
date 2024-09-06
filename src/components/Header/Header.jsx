import React from 'react'
import './Header.css'
import Address from './Address'
import Socials from './Socials'
import Services from './Services'

function Header() {
  return (
    <header>
    <img src="./logoSvg.svg" alt="logo" id='logo' />
    <Address/>
    <Socials/>
    <Services/>
    </header>
  )
}

export default Header