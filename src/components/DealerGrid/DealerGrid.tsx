import { FunctionComponent } from 'react'
import { DealerCard } from '..'
import './DealerGrid.sass'

interface DealerGridProps {
    
}
 
export const DealerGrid: FunctionComponent<DealerGridProps> = () => {
  return (
    <div className='grid-wrapper'>
      <div className='dealer-grid'>
        <div className="dealer-grid-item">
          <DealerCard/>
        </div>
        <div className="dealer-grid-item">
          <DealerCard/>
        </div>
        <div className="dealer-grid-item">
          <DealerCard/>
        </div>
        <div className="dealer-grid-item">
          <DealerCard/>
        </div>
        <div className="dealer-grid-item">
          <DealerCard/>
        </div>
        <div className="dealer-grid-item">
          <DealerCard/>
        </div>
        <div className="dealer-grid-item">
          <DealerCard/>
        </div>
        <div className="dealer-grid-item">
          <DealerCard/>
        </div>
      
      </div>
      <div className="dealer-grid-button">
        <button>LOAD MORE</button>
      </div>
    </div>
  )
}
 