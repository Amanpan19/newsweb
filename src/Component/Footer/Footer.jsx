import React from 'react'
import '../Footer/footer.css'
import whatsappIcon from '../../Assets/whatsapp_icon.png'
import pint from '../../Assets/pintester_icon.png'
import instaIcon from '../../Assets/instagram_icon.png'

const Footer = () => {
    const getYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>News<span>.Web</span></p>
      </div>
      <ul className="footerLinks">
        <li>About</li>
        <li>Service</li>
        <li>Newsletter</li>
        <li>Email</li>
      </ul>
      <div className="socialIcon">
        <div className="iconCont">
           <img src={whatsappIcon} alt="whatsapp" srcset=""/>
        </div>
        <div className="iconCont">
           <img src={pint} alt="pintester" srcset="" />
        </div>
        <div className="iconCont">
           <img src={instaIcon} alt="insta" srcset="" />
        </div>
      </div>
      <div className="copyRight">
        <p style={{textAlign:'center'}}>Developer : <span>Aman Pandey</span></p>
        <p style={{textAlign:'center'}}>©️Copyright : {getYear}, All rights are reserved</p>
      </div>
    </div>
  )
}

export default Footer
