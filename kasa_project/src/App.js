import React from 'react'
import "../src/App.css"
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ApartmentList from './components/ApartmentList'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ApartmentList/>
    </div>
  )
}

export default App
