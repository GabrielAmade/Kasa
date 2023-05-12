import React, { useEffect, useState } from 'react';
import DescriptionContainer from './DescriptionContainer'
import "./ApartmentPage.css"
import ApartmentBanner from './ApartmentBanner'
import ApartmentInfos from './ApartmentInfos'
import { useParams } from 'react-router-dom'




function ApartmentPage() {


  const { id } = useParams()

  // console.log("apartment id :" + JSON.stringify(id));
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

if(selectedApartment === null){
  return <div>Loading...</div>
}

const [firstname, lastname] = selectedApartment.host.name.split(' ')


  return (
    <div className='apartment_page'>
        {/* <p>selected flat : {JSON.stringify(selectedApartment)}</p> */}
        <ApartmentBanner 
          pictures = {selectedApartment.pictures} />
        <ApartmentInfos 
          title={selectedApartment.title} 
          location={selectedApartment.location} 
          tags={selectedApartment.tags}
          firstname={firstname}
          lastname={lastname}
          picture={selectedApartment.host.picture}
          rating={selectedApartment.rating}
          />
        <div className='apartment_description_block'>
            <DescriptionContainer
                title="Description"
                content={selectedApartment.description}

            />
            <DescriptionContainer 
                title="Equipements"
                content={selectedApartment.equipments.map(equipment => <ul><li>{equipment}</li></ul>)}

              
            />
        </div>

    </div>
  )
}

export default ApartmentPage



