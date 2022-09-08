import { upperCase } from 'lodash'
import { FunctionComponent } from 'react'
import pinIconImg from '../../assets/images/icons/pin.png'
import { Dealer } from '../../interfaces'
import { useStore } from '../../store'
import './DealerCard.sass'

interface DealerCardProps extends Dealer {
    
}
 
export const DealerCard: FunctionComponent<DealerCardProps> = ({ id, title, address, services }) => {
  const toggleModal = useStore(state => state.toggleModal)
  const setSelectedId = useStore(state => state.setSelectedId)
  const handleClick = () => {
    setSelectedId(id)
    toggleModal()
  }
  return ( 
    <div onClick={handleClick} className='dealer-card'>
      <div className='pin-icon'>
        <img src={pinIconImg} alt="pin"/>
      </div>
      <div className='card-description'>
        <p>{title}</p>
        <p>{address}</p>
        <div className='card-services'>
          {
            services.map((service, index) => {
              if (index <= 2) {
                return (<>
                  <p>{upperCase(service)}</p>
                  <span className='service-separator'>•</span>
                </>)
              }
            })
          }
        </div>
                  
      </div>
    </div>
  )
}
 