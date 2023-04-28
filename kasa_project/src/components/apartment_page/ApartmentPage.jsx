import React from 'react'
import "./ApartmentPage.css"

function ApartmentPage() {
  return (
    <div className='apartment_page'>
        <div className='apartment_img'><img src='/apartment/background_appt.png' alt='appartment' /></div>
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
                <h3>Alexandre Dumas</h3>
                <div className='apartment_owner_badge'></div>
                <div className='apartment_owner_stars'></div>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
            </div>
        </div>
        <div className='apartment_description'>
            <p>Description</p>
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à</p>
        </div>

    </div>
  )
}

export default ApartmentPage
