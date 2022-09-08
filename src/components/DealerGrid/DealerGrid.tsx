import { FunctionComponent } from 'react'
import { DealerCard } from '..'
import { useStore } from '../../store'
import './DealerGrid.sass'

interface DealerGridProps {
    
}
 
export const DealerGrid: FunctionComponent<DealerGridProps> = () => {
  const dealers = useStore(state => state.dealers)
  const nextPage = useStore(state => state.nextPage)
  const getNextPage = useStore(state => state.getNextPage)
  return (
    <div className='grid-wrapper'>
      <div className='dealer-grid'>
        {
          dealers.length !== 0 && dealers.map((item, index) => (<div key={index} className="dealer-grid-item">
            <DealerCard {...item} />
          </div>))
        }      
      </div>
      <div className="dealer-grid-button">
        {nextPage && <button onClick={getNextPage}>LOAD MORE</button>}
      </div>
    </div>
  )
}
 