import React, { useEffect, useState } from 'react';
import './ApartmentList.css';
import ApartmentCard from './ApartmentCard.jsx';

function ApartmentList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    async function fetchApartments() {
      try {
        const response = await fetch('data_base.json');
        const data = await response.json();
        setApartments(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchApartments();
  }, []);

  return (
    <div className='container'>
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>
      ))}

    

    </div>
  );
}

export default ApartmentList;