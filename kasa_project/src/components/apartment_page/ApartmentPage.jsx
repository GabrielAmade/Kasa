import React from 'react'
import ApartmentDescription from './ApartmentDescription'
import "./ApartmentPage.css"
import ApartmentBanner from './ApartmentBanner'
import ApartmentInfos from './ApartmentInfos'

function ApartmentPage() {
  return (
    <div className='apartment_page'>
        <ApartmentBanner />
        <ApartmentInfos />
        <div className='apartment_description_block'>
            <ApartmentDescription/>
            <ApartmentDescription/>
        </div>

    </div>
  )
}

export default ApartmentPage
