import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPage.css"

function ErrorPage() {
  return (
    <div>   
        <div className='errorPage'>
            <h1>404</h1>
            <h2>Oops ! La page que vous demandez n'existe pas</h2>
            <Link to="/" className='linkHome'>Retourner sur la page d'accueil</Link>
        </div>
    </div>
  )
}

export default ErrorPage
