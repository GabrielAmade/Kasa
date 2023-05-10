import React, { useEffect, useState } from 'react';
import DescriptionContainer from './DescriptionContainer'
import "./ApartmentPage.css"
import ApartmentBanner from './ApartmentBanner'
import ApartmentInfos from './ApartmentInfos'
import { useParams } from 'react-router-dom'




function ApartmentPage() {


  const { id } = useParams()

  console.log("apartment id :" + JSON.stringify(id));
  const [selectedApartment, setselectedApartment] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data_base.json`);
        const data = await response.json();
        const filterData = data.find(data => data.id === id)
        setselectedApartment(filterData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
}, [id, selectedApartment]);



  return (
    <div className='apartment_page'>
        <p>selected flat : {JSON.stringify(selectedApartment)}</p>
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



