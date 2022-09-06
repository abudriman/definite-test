import { FunctionComponent, MouseEventHandler, ReactNode, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import './NavigationItem.sass'

interface NavigationItemProps {
  showCaret: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}
 
export const NavigationItem: FunctionComponent<NavigationItemProps> = ({children, showCaret, onClick}) => {
  const [color, setColor] = useState('#FFFFFF')

  return (
    <div onClick={onClick} className="navigation-item" onMouseEnter={() => setColor('#9E0B00')} onMouseLeave={() => setColor('#FFFFFF')} >
      {children}
      {showCaret && <FiChevronDown width={'10px'} height={'6.17px'} color={color} />}
    </div>
  )
}