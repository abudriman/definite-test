import { FunctionComponent } from 'react'
import { FiInstagram } from 'react-icons/fi'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'
import './Footer.sass'

interface FooterProps {
    
}
 
export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className='footer'>
      <div className="divider"/>
      <p>STAY CONNECTED WITH US</p>
      <div className="footer-media">
        <ImFacebook size={28}/>
        <ImTwitter size={28}/>
        <FiInstagram size={28}/>
        <ImYoutube size={28}/>
        <HiOutlineMail size={28}/>
      </div>
      <p>CONTACT US</p>
      <div className="divider" />
      <p>Copyright © 2021.<br />PT Mitsubishi Motors Krama Yudha Sales Indonesia</p>
    </div>
  )
}
