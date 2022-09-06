import { FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.sass'
import { Navbar } from '../../components'
interface HomeProps {
    
}
 
export const Home: FunctionComponent<HomeProps> = () => {
  const [state, setState] = useState(0)
  const handleClick = () => {
    setState(old => {
      return old === 3? 0: old+=1
    })
  }
  useEffect(() => {
    console.log('rerender: list')
  }, [])
  return (
    <div className='home-page'>
      <Navbar />
      {/* <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link>
      <Simple isActive={ state===0} color='#FF0000' text='Merah' />
      <Simple isActive={ state===1} color='#FFFF00' text='Kuning' />
      <Simple isActive={ state===2} color='#00FF00' text='Hijau' />
      <Simple isActive={state === 3} color='#0000FF' text='Biru' />
      <div className="testSass">
        <p>A</p>
        <p>A</p>
        <p>A</p>
      </div> */}
      {/* <button onClick={handleClick}>Change</button> */}
    </div> )
}
 
const Simple: FunctionComponent<{ isActive: boolean, color: string, text: string }> = ({ isActive, color, text }) => {
  useEffect(() => {
    console.log('rerender:', text)
  }, [])
  return (<p style={{
    backgroundColor:isActive ? color : 'unset'
  }}>{text}</p>)
}