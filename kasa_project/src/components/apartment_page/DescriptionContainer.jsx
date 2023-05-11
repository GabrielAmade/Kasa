import React, {useState} from 'react'
import "./DescriptionContainer.css"

function DescriptionContainer(props) {
  const [isContentVisible, setIsContentVisible] = useState(false)

  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
    <div className='description'>
        <div className='description_title'>
            <p>{props.title}</p>
            <span><i className="fa-solid fa-chevron-up chevron" onClick={showContent}></i></span>
        </div>
        {isContentVisible && <p className='description_content'>{props.content}</p>}
    </div>
  )
}

export default DescriptionContainer
