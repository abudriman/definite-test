import { debounce, filter, lowerCase } from 'lodash'
import { ChangeEvent, FunctionComponent, MouseEvent, useRef, useState } from 'react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { IoIosPin, IoMdClose } from 'react-icons/io'
import { DealerGrid } from '..'
import { Province } from '../../interfaces'
import { useStore } from '../../store'
import './DealerFinder.sass'

interface DealerFinderProps {
    
}
 
export const DealerFinder: FunctionComponent<DealerFinderProps> = () => {
  const keyword = useStore(state => state.keyword)
  const setKeyword = useStore(state => state.setKeyword)
  const provinces = useStore(state => state.provinces)
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [mouseHover, setMouseHover] = useState(false)
  // const [filterQuery, setFilterQuery] = useState('')
  const forwardFocus = () => {
    locationInput.current?.focus()
    setShowSuggestion(true)
  }
  const onBlur = () => {
    locationInput.current?.blur()
    if (!mouseHover) {
      setShowSuggestion(false)
    }
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setKeyword(e.target.value)
    }
  }

  const handleMouseLeave = () => {
    if (!locationInput.current) {
      setShowSuggestion(false)
    }
    setMouseHover(false)
  }

  const handleClearKeyword = (e: MouseEvent<HTMLInputElement>) => {
    if (keyword !== '') {
      e.stopPropagation()
      setKeyword('')
    } else {
      forwardFocus()
    }
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
            <input value={keyword} onChange={handleChange} ref={locationInput} onBlur={onBlur} placeholder='Pilih Lokasi Terdekat' type="text" />
            <div className="arrow-icon" onClick={handleClearKeyword}>
              {!keyword? <FiChevronDown/>: <IoMdClose/>}
            </div>
            {
              showSuggestion && (<div id="suggestion" onMouseEnter={()=>setMouseHover(true)} onMouseLeave={handleMouseLeave}>
                {provinces.filter(item => lowerCase(item.name).includes(lowerCase(keyword) ?? '')).slice(0, 5).map((item, index) => <SuggestionItem onBlur={() => { onBlur(); setMouseHover(false); setShowSuggestion(false)}} key={index} {...item} />)}
              </div>)
            }
          </div>
        </div>
      </div>
      <div className="row">
        <DealerGrid />
      </div>
    </div>
  )
}
 

interface SuggestionItemProps extends Province {
  onBlur: ()=>void
}
 
const SuggestionItem: FunctionComponent<SuggestionItemProps> = ({ name, onBlur }) => {
  const setKeyword = useStore(state => state.setKeyword)
  const handleClick = () => {
    console.log('called')
    setKeyword(name)
    onBlur()
  }
  return (<div onClick={handleClick} className='suggestion-item'>
    <IoIosPin/>
    <p>{name}</p>
  </div> )
}