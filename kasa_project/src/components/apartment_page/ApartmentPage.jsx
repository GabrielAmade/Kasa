import React, { useEffect } from 'react';
import DescriptionContainer from './DescriptionContainer'
import "./ApartmentPage.css"
import ApartmentBanner from './ApartmentBanner'
import ApartmentInfos from './ApartmentInfos'
// import { useParams } from 'react-router-dom'




function ApartmentPage() {
// const { id } = useParams()

// console.log("apartment id :" + JSON.stringify(id));

// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await fetch('data_base.json');
//       const data = await response.json();
//       // const dataFilter = data.find(data => data.id === id)
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchData();
// }, []);

useEffect(() => {
  async function fetchApartments() {
    try {
      const response = await fetch('data_base.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  fetchApartments();
}, []);



  return (
    <div className='apartment_page'>
      
        <ApartmentBanner />
        <ApartmentInfos />
        <div className='apartment_description_block'>
            <DescriptionContainer/>
            <DescriptionContainer/>
        </div>
        {/* <p>{id}</p> */}

    </div>
  )
}

export default ApartmentPage



