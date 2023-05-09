import React from 'react'
import DescriptionContainer from '../apartment_page/DescriptionContainer'
import "./About.css"
import Banner from '../banner/Banner'

function About() {


  
  return (
    <div>
      <Banner />
      <div className="about_container">
        <DescriptionContainer/>
        <DescriptionContainer/>
        <DescriptionContainer/>
      </div>
    </div>
  )
}

export default About
