import React, { useEffect, useState } from 'react';
import './List.css';
import ApartmentCard from '../card/Card.jsx';

function ApartmentList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    async function fetchApartments() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data_base.json`);
        const data = await response.json();
        setApartments(data);
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