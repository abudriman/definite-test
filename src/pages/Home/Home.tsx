import { FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.sass'
import { Banner, DealerFinder, LayoutNavbar, Navbar } from '../../components'
interface HomeProps {
    
}
 
export const Home: FunctionComponent<HomeProps> = () => {
  const [state, setState] = useState(0)
  const handleClick = () => {
    setState(old => {
      return old === 3? 0: old+=1
    })
  }
  useEffect(() => {
    console.log('rerender: list')
  }, [])
  return (
    
    <LayoutNavbar>
      <Banner />
      <DealerFinder />
    </LayoutNavbar>
  )
}
 