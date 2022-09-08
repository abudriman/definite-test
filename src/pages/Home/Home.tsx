import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import './Home.sass'
import { Banner, DealerFinder, LayoutNavbar, AppStoreBanner, Footer, ModalDetail } from '../../components'
import { useStore } from '../../store'
import { debounce, isEmpty } from 'lodash'
interface HomeProps {
    
}
 
export const Home: FunctionComponent<HomeProps> = () => {
  const getProvince = useStore(state => state.getProvince)
  const getDealers = useStore(state => state.getDealers)
  const keyword = useStore(state => state.keyword)
  const [latlong, setLatlong] = useState<string|undefined>(undefined)
  const [refresh, setRefresh] = useState(false)
    
  useEffect(() => {
    handlePermission()
    getProvince()
  }, [])

  useEffect(() => {
    getDealers(latlong, undefined)
  }, [latlong, refresh])

  useEffect(() => {
    adaptKeyword()
  }, [keyword])

  const adaptKeyword = debounce(() => {
    //clear keyword 
    if (keyword === '') {
      //send unfiltered if latlong is undefined
      getDealers(latlong, undefined)
      return 
    } 
    getDealers(undefined, keyword)
  }, 1000)

  const handlePermission = () => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        //fetch filtered
        return navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
      } else if (result.state === 'prompt') {
        return navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
      } else if (result.state === 'denied') {
        console.log('denied')
        onRefresh()
        return //fetch unfiltered
      }
    })
  }

  const successCallback: PositionCallback = (position: GeolocationPosition) => {
    setLatlong(`${position.coords.latitude},${position.coords.longitude}`)
  }

  const errorCallback: PositionErrorCallback = (positionError: GeolocationPositionError) => {
    setLatlong(undefined)
  }

  const onRefresh = () => {
    setRefresh(old => !old)
  }
  
  return (    
    <LayoutNavbar>
      <Banner />
      <DealerFinder />
      <AppStoreBanner />
      <Footer />
      <ModalDetail/>
    </LayoutNavbar>
  )
}
 