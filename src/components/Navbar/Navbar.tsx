import { FunctionComponent, useState } from 'react'
import { HamburgerMenu, Navigation } from '../../components'
import './Navbar.sass'
import mitsubishiMotorsLogo from '../../assets/images/mitsubishi-motors-logo.png'
import euro4Logo from '../../assets/images/euro4-logo.png'


interface NavbarProps {  
}
 
export const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={mitsubishiMotorsLogo} alt="mitsubushi-motors-logo"  />
      <div className="right-navbar-items">
        <img className='euro4-logo' src={euro4Logo} alt="euro4-logo"  />
        <Navigation />
        <HamburgerMenu />
      </div>
    </div>
  )
}
