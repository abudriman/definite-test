import { FunctionComponent } from 'react'
import pinIconImg from '../../assets/images/icons/pin.png'
import './DealerCard.sass'

interface DealerCardProps {
    
}
 
export const DealerCard: FunctionComponent<DealerCardProps> = () => {
  return ( 
    <div className='dealer-card'>
      <div className='pin-icon'>
        <img src={pinIconImg} alt="pin"/>
      </div>
      <div className='card-description'>
        <p>srikandi mampang</p>
        <p>Jl. Mampang Prapatan No. 21-23, Jakarta Selatan</p>
        <div className='card-services'>
          <p>SALES</p>
          <span className='service-separator'>•</span>
          <p>SERVICE</p>
          <span className='service-separator'>•</span>
          <p>SPAREPART</p>
        </div>
                  
      </div>
    </div>
  )
}
 