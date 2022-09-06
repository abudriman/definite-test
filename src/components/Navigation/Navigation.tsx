import { FunctionComponent, useState } from 'react'
import { NavigationItem } from '../../components'
import './Navigation.sass'

interface NavigationProps {  
}
 
export const Navigation: FunctionComponent<NavigationProps> = () => {
  const handleClick = () => {
    
    alert('clicked')
    
  }
  return (
    <div className="navigation">
      <NavigationItem onClick={handleClick} showCaret>
        <p>ABOUT US</p>
      </NavigationItem>
      <NavigationItem onClick={handleClick} showCaret>
        <p>EXPLORE CARS</p>
      </NavigationItem>
      <NavigationItem onClick={handleClick} showCaret={false}>
        <p>PROMO</p>
      </NavigationItem>
      <NavigationItem onClick={handleClick} showCaret>
        <p>NEWS &amp; EVENTS</p>
      </NavigationItem>
    </div>
  )
}
