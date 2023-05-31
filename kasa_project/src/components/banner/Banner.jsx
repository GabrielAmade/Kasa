
import React from "react";
import "./Banner.css";

export default function Banner({ text, imageUrl }) {
  const bannerStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="banner" style={bannerStyle}>
      {text && <h2 className="banner-header">{text}</h2>}
    </div>
  );
}