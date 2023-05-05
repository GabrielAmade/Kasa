import React from 'react'
import DescriptionContainer from './DescriptionContainer'
import "./ApartmentPage.css"
import ApartmentBanner from './ApartmentBanner'
import ApartmentInfos from './ApartmentInfos'
import { useParams } from 'react-router-dom'

function ApartmentPage() {
 
const { id } = useParams()

  return (
    <div className='apartment_page'>
        <ApartmentBanner />
        <ApartmentInfos />
        <div className='apartment_description_block'>
            <DescriptionContainer/>
            <DescriptionContainer/>
        </div>
        <p>{id}</p>

    </div>
  )
}

export default ApartmentPage
