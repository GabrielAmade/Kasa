import React from 'react'
import { Link } from 'react-router-dom'
import "./Apartment.css"

function Apartment() {
  return (
    <div className='apartment'>
        <Link to="/apartment">
            <div>Titre de la location</div>
        </Link>
    </div>
  )
}

export default Apartment
