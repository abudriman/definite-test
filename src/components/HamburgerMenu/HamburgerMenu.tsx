import { FunctionComponent } from 'react'
import hamburgerMenuIcon from '../../assets/images/icons/hamburger-menu-icon.png'
import './HamburgerMenu.sass'


interface HamburgerMenuProps {
    
}
 
export const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = () => {
  return ( 
    <img className='hamburger-menu' src={hamburgerMenuIcon} alt="menu"  />  
  )
}