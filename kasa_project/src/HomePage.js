import React from 'react'
import "../src/HomePage.css"
import Banner from './components/banner/Banner'
import ApartmentList from './components/apartment_list/ApartmentList'


function HomePage(props) {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" />
      <ApartmentList/>
    </div>
  )
}

export default HomePage
