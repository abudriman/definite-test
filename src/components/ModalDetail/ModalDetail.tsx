import { upperCase } from 'lodash'
import { FunctionComponent, useEffect } from 'react'
import { useStore } from '../../store'
import {GrClose} from 'react-icons/gr'
import { RiMap2Fill } from 'react-icons/ri'
import redPinIcon from '../../assets/images/icons/red-pin.png'
import './ModalDetail.sass'
import { ImPhone } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'

interface ModalDetailProps {
    
}
 
export const ModalDetail: FunctionComponent<ModalDetailProps> = () => {
  const showModal = useStore(state => state.showModal)
  const toggleModal = useStore(state => state.toggleModal)
  const selectedId = useStore(state => state.selectedId)
  const dealer = useStore(state => state.dealers).find(dealer => dealer.id === selectedId)
    
  const handleClickDirection = (lat:string, lon:string) => {
    const url = `https://www.google.com/maps/dir/Current+Location/${lat},${lon}`
    window.open(url, '_blank')
  }
    
    
  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = 'hidden'
    }
    return () =>{
      document.body.style.overflowY = 'auto'
    }
  }, [showModal])
  return (<div className='modal' style={{
    display: showModal? 'flex': 'none'
  }} >
    <div className="modal-body">
      <div> <div className='pin-icon'>
        <img src={redPinIcon} alt="icon" />
      </div>
      <div className='modal-content'>
        <div className='card-services'>
          {
            dealer?.services.map((service, index) => {
              if (index <= 2) {
                return (<>
                  <p>{upperCase(service)}</p>
                  <span className='service-separator'>•</span>
                </>)
              }
            })
          }
        </div>
        <p>{dealer?.title}</p>
        <div className='detail-address'>
          <p>{dealer?.address}</p>
          <p>{`${dealer?.distance_km} km`}</p>
        </div>
        <div className="direction-button" onClick={()=>handleClickDirection(dealer?.latitude ?? '', dealer?.longitude ?? '')}>
          <div>
            <RiMap2Fill/>
            <p>VIEW DIRECTION</p>
          </div>
        </div>
        <div className="actions">
          <button>REQUEST TEST DRIVE</button>
          <button>BOOK SERVICE</button>
        </div>
      </div>
      <div className='icon-close' onClick={toggleModal}>
        <GrClose size='18px'/>
      </div>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <div className='detail-showroom'>
          <p>Showroom</p>
          {dealer?.showroom_operational_hours.map((item, index)=> 
            <div className='operational-hour' key={index}>
              <p>{item.days}</p>
              <p>{item.hours}</p>
            </div>
          )}
        </div>
        <div className='detail-bengkel'>
          <p>Bengkel</p>
          {dealer?.bengkel_operational_hours.map((item, index)=> 
            <div className='operational-hour' key={index}>
              <p>{item.days}</p>
              <p>{item.hours}</p>
            </div>
          )}
        </div>
        <div className='detail-contact'>
          <p>Contact</p>
          <div>
            <ImPhone />
            <p>{dealer?.phone}</p>
          </div>
          <div>
            <HiOutlineMail />
            <p>email@email.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
 
