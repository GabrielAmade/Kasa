import React, { useEffect, useState } from 'react';
import DescriptionContainer from './DescriptionContainer';
import './ApartmentPage.css';
import ApartmentBanner from './ApartmentBanner';
import ApartmentInfos from './ApartmentInfos';
import { useParams, useNavigate } from 'react-router-dom';

function ApartmentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedApartment, setselectedApartment] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data_base.json`);
        const data = await response.json();
        const filterData = data.find((data) => data.id === id);
        setselectedApartment(filterData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  if (selectedApartment === null) {
    navigate('/error'); 
    return null; 
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



