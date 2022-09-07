import { FunctionComponent, useEffect, useState } from 'react'
import './Home.sass'
import { Banner, DealerFinder, LayoutNavbar, AppStoreBanner, Footer } from '../../components'
interface HomeProps {
    
}
 
export const Home: FunctionComponent<HomeProps> = () => {
  return (    
    <LayoutNavbar>
      <Banner />
      <DealerFinder />
      <AppStoreBanner />
      <Footer/>
    </LayoutNavbar>
  )
}
 