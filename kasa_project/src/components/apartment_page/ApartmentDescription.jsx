import React from 'react'
import "./ApartmentDescription.css"

function ApartmentDescription() {
  return (
    <div className='description'>
        <div className='description_title'>
            <p>Description</p>
            <span><i className="fa-solid fa-chevron-up chevron"></i></span>
        </div>
        <p className='description_text'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à</p>
    </div>
  )
}

export default ApartmentDescription
