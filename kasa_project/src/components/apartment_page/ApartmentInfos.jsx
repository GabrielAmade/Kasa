import React from 'react'
import "./ApartmentInfos.css"

function ApartmentInfos() {
  return (
    <div className='apartment_infos'>
            <div className='apartment_title'>
                <h1 className='apartment_page_title'>Cozy loft on the Canal Saint-Martin</h1>
                <h2 className='apartment_page_subtitle'>Paris, Île-de-France</h2>
                <div className='apartment_filter'>
                    <p>Cozy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>    
                </div>
            </div>
            <div className='apartment_owner'>
                <div className='apartment_owner_details'>
                    <div className='apartment_owner_name'>
                        <h3>Alexandre</h3>
                        <h3>Dumas</h3>
                    </div>
                    <div className='apartment_owner_badge'></div>
                </div>
                <div className='apartment_owner_stars'>
                    <span className='active'>★</span>
                    <span className='active'>★</span>
                    <span className='active'>★</span>
                    <span className='inactive'>★</span>
                    <span className='inactive'>★</span>
                </div>
            </div>
        </div>
  )
}

export default ApartmentInfos
