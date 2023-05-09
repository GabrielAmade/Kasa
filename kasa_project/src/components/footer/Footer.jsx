import React from 'react'
import "./Footer.css"
import LogoFooter from "../../assets/logo_footer.png"


function Footer() {
  return (
    <div className='footer'>
        <div className='logo_footer'>
            <img src={LogoFooter} alt='logo' />
        </div>
        <div className='footer_text'>&copy; 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
