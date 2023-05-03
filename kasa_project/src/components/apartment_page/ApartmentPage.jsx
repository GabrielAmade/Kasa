import React from 'react'
import DescriptionContainer from './DescriptionContainer'
import "./ApartmentPage.css"
import ApartmentBanner from './ApartmentBanner'
import ApartmentInfos from './ApartmentInfos'

function ApartmentPage() {
  return (
    <div className='apartment_page'>
        <ApartmentBanner />
        <ApartmentInfos />
        <div className='apartment_description_block'>
            <DescriptionContainer/>
            <DescriptionContainer/>
        </div>

    </div>
  )
}

export default ApartmentPage
