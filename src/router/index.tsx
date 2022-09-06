import { FunctionComponent } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import {Home} from '../pages'

interface RouterProps {
    
}
 
const Router: FunctionComponent<RouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>)
}
 
export default Router