import { FunctionComponent, ReactNode } from 'react'
import './LayoutNavbar.sass'
import { Navbar } from '..'

interface LayoutNavbarProps {
    children: ReactNode
}
 
export const LayoutNavbar: FunctionComponent<LayoutNavbarProps> = ({children}) => {
  return (
    <div className='layout-navbar'>
      <Navbar />
      <div className='main-content'>
        {children}
      </div>
    </div>
  )
}
 
