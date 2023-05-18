import React, { useState } from 'react';
import "./ApartmentBanner.css"

function ApartmentBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0)

  const getClassName = (index) => {
    if(index === currentPicture) return "show";
    return "";
  };


  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if(newCurrentPicture < 0){
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1)
  }

 

  return (
    
      <div className='apartment_img'>
          {pictures.map((picture, index) => (<img key={picture} src={picture} alt="appartement" className={getClassName(index)}/>))}
        {pictures.length > 1 && (
          <div className="button_container">
            <button className='btn-previous btn' onClick={moveToPrevious}>
              <i className='fa-solid fa-chevron-left'></i>
            </button>
            <button className='btn-next btn' onClick={moveToNext}>
              <i className='fa-solid fa-chevron-right chevron_apartment'></i>
            </button>
          </div>
        )}
      </div>
  )
}

export default ApartmentBanner
