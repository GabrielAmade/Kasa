import React, { useState } from 'react';
import './DescriptionContainer.css';

function DescriptionContainer(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isChevronRotated, setIsChevronRotated] = useState(false);

  const showContent = () => {
    setIsContentVisible(true);
    setIsChevronRotated(true);
  };

  const hideContent = () => {
    setIsContentVisible(false);
    setIsChevronRotated(false);
  };

  

  return (
    <div className='description'>
      <div className='description_title'>
        <p>{props.title}</p>
        <span>
          <i
            className={`fa-solid fa-chevron-up chevron ${
              isChevronRotated ? 'rotate' : ''
            }`}
            onClick={isContentVisible ? hideContent : showContent}
          ></i>
        </span>
      </div>
      {isContentVisible && (
        <div className='description_content'>{props.content}</div>
      )}
    </div>
  );
}

export default DescriptionContainer;