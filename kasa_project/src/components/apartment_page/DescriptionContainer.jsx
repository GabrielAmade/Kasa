import React, {useState} from 'react'
import "./DescriptionContainer.css"

function DescriptionContainer() {
  const [isContentVisible, setIsContentVisible] = useState(false)

  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
    <div className='description'>
        <div className='description_title'>
            <p>Description</p>
            <span><i className="fa-solid fa-chevron-up chevron" onClick={showContent}></i></span>
        </div>
        {isContentVisible && <p className='description_content'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'</p>}
    </div>
  )
}

export default DescriptionContainer
