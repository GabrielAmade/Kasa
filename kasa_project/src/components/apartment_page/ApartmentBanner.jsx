import React from 'react'
import "./ApartmentBanner.css"

function ApartmentBanner(props) {
  return (
            <div className='apartment_img'><img src={props.imageUrl} alt='appartment' /></div>

  )
}

export default ApartmentBanner
