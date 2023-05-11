import React from 'react'
import "./ApartmentInfos.css"

function ApartmentInfos(props) {

  




  return (
    <div className='apartment_infos'>
            <div className='apartment_title'>
                <h1 className='apartment_page_title'>{props.title}</h1>
                <h2 className='apartment_page_subtitle'>{props.location}</h2>
                <div className='apartment_filter'>
                    {props.tags.map((tag) => (<span>{tag}</span>))}    
                </div>
            </div>
            <div className='apartment_owner'>
                <div className='apartment_owner_details'>
                    <div className='apartment_owner_name'>
                        <h3>{props.firstname}</h3>
                        <h3>{props.lastname}</h3>
                    </div>
                    <div className='apartment_owner_badge'>
                        <img src={props.picture} alt="" />
                    </div>
                </div>
                <div className='apartment_owner_stars'>

                    {[1,2,3,4,5].map((number) =>(<span className={props.rating >= number ? "active" : ""}>★</span>))}
                    
                </div>
            </div>
        </div>
  )
}

export default ApartmentInfos
