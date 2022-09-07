import { FunctionComponent, useEffect, useState } from 'react'
import './Home.sass'
import { Banner, DealerFinder, LayoutNavbar, AppStoreBanner, Footer } from '../../components'
import { useStore } from '../../store'
interface HomeProps {
    
}
 
export const Home: FunctionComponent<HomeProps> = () => {
  const setPosition = useStore(state => state.setPosition) 
  const position = useStore(state => state.position)
  useEffect(() => {
    console.log('run once')
    handlePermission()
  }, [])

  useEffect(() => {
    console.log(position)
  }, [position])

  const handlePermission = () => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        //fetch filtered
        return navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
      } else if (result.state === 'prompt') {
        return navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
      } else if (result.state === 'denied') {
        return //fetch unfiltered
      }
    })
  }

  const successCallback: PositionCallback = (position: GeolocationPosition) => {
    console.log(position)
    setPosition(position)
  }

  const errorCallback: PositionErrorCallback = (positionError: GeolocationPositionError) => {
    console.log(positionError)
    setPosition(undefined)
  }
  
  return (    
    <LayoutNavbar>
      <Banner />
      <DealerFinder />
      <AppStoreBanner />
      <Footer/>
    </LayoutNavbar>
  )
}
 