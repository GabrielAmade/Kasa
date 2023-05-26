import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ApartmentPage.css';
import ApartmentBanner from './ApartmentBanner';
import ApartmentInfos from './ApartmentInfos';
import DescriptionContainer from './DescriptionContainer';

function ApartmentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedApartment, setSelectedApartment] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data_base.json`);
        const data = await response.json();
        const filterData = data.find((data) => data.id === id);

        if (filterData) {
          setSelectedApartment(filterData);
        } else {
          navigate('/error');
          return null;
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id, navigate]);


  const [firstname, lastname] = selectedApartment?.host?.name?.split(' ') || [];

  return (
    <div className='apartment_page'>
      {selectedApartment && (
        <>
          <ApartmentBanner pictures={selectedApartment.pictures} />
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
            <DescriptionContainer title='Description' content={selectedApartment.description} />
            <DescriptionContainer
              title='Equipements'
              content={Array.isArray(selectedApartment.equipments) ? selectedApartment.equipments.map((equipment, index) => (
                <ul key={index}>
                  <li>{equipment}</li>
                </ul>
              )) : null}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ApartmentPage;