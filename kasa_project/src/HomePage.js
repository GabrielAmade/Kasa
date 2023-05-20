import React from 'react'
import "../src/HomePage.css"
import Banner from './components/banner/Banner'
import ApartmentList from './components/list/List'


function HomePage(props) {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" />
      <ApartmentList/>
    </div>
  )
}

export default HomePage
