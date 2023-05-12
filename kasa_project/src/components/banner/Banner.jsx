import React from "react"
import "./Banner.css"

export default function Banner({ text }) {

  return (
    <div className="banner">
      {text && <h2 className="banner-header">{text}</h2>}
    </div>
  )
}