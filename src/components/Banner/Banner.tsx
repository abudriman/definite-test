import { FunctionComponent } from 'react'
import bannerImg from '../../assets/images/banner.webp'
import './Banner.sass'


interface BannerProps {
    
}
 
export const Banner: FunctionComponent<BannerProps> = () => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="banner image" />
    </div>
  )
}