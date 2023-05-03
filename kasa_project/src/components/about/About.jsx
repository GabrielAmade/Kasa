import React from 'react'
import ApartmentDescription from '../apartment_page/ApartmentDescription'
import Banner from "../banner/Banner"
import "./About.css"

function About() {
  return (
    <div>
      <Banner />
      <div className="about_container">
        <ApartmentDescription/>
        <ApartmentDescription/>
        <ApartmentDescription/>
      </div>
    </div>
  )
}

export default About
