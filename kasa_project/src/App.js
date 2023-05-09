import React from 'react'
import "../src/App.css"
import Banner from './components/banner/Banner'
import ApartmentList from './components/apartment/ApartmentList'


function App(props) {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" />
      <ApartmentList/>
    </div>
  )
}

export default App
