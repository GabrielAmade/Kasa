import React from 'react'
import "../src/App.css"
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ApartmentList from './components/ApartmentList'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ApartmentList/>
      <Footer />
    </div>
  )
}

export default App
