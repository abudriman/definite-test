import { FunctionComponent, useRef } from 'react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { DealerGrid } from '..'
import './DealerFinder.sass'

interface DealerFinderProps {
    
}
 
export const DealerFinder: FunctionComponent<DealerFinderProps> = () => {
  const forwardFocus = () => {
    locationInput.current?.focus()
  }
  const locationInput = useRef<HTMLInputElement>(null)
  return (
    <div className='dealer-finder'>
      <div className="row title-description">
        <p>FIND DEALER</p>
        <div>
          <p>Cari dan kunjungi dealer resmi Mitsubishi terdekat di kota Anda untuk mendapatkan pelayanan terbaik terkait dengan kendaraan dari Mitsubishi Motors Indonesia. </p>
        </div>
      </div>
      <div className="row">
        <div className="location-dropdown" onClick={forwardFocus}>
          <p>Discover the nearest dealership in your area</p>
          <div className="input-dropdown">
            <div className="search-icon">
              <FiSearch color='#9B9B9B'/>
            </div>
            <input ref={locationInput} placeholder='Pilih Lokasi Terdekat' type="text" />
            <div className="arrow-icon">
              <FiChevronDown/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <DealerGrid />
      </div>
    </div>
  )
}
 