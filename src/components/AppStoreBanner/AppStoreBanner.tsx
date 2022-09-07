import { FunctionComponent } from 'react'
import appSampleImg from '../../assets/images/app-sample.png'
import playstoreImg from '../../assets/images/playstore.png'
import appstoreImg from '../../assets/images/appstore.png'
import './AppStoreBanner.sass'

interface AppStoreBannerProps {
    
}
 
export const AppStoreBanner: FunctionComponent<AppStoreBannerProps> = () => {
  return (
    <div className='app-store-banner'>
      <div className="image">
        <div className='promo-text'>
          <div>
            <p>LIVE SIMPLE WITH</p>
            <p>MY MITSUBISHI</p>
            <p>Nikmati semua fasilitas berkendara Mitsubishi,<br />dari book test drive hingga service berkala <br />langsung dari tangan Anda dengan My Mitsubishi ID.</p>
            <p>Download aplikasinya sekarang di App Store dan Play Store.</p>
            <div className='store-button'>
              <img src={appstoreImg} alt="store button" />     
              <img src={playstoreImg} alt="store button" />     
            </div>
          </div>
          <div></div>
        </div>
        <div className='app-sample'>
          {/* <img src={appSampleImg} alt="app sample" /> */}
        </div>
      </div>
    </div> )
}
