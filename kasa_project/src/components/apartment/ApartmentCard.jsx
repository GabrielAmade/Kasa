import React from 'react'
import { Link } from 'react-router-dom'
import "./ApartmentCard.css"

function ApartmentCard(props) {
  
  
  return (
    <div className='apartment_card'>
        <img src={props.imageUrl} alt="appartement" />
        <Link to={`/apartment/${props.id}`}>
            <div>{props.title}</div>
        </Link>
    </div>
  )
}

export default ApartmentCard
