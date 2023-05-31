import React from 'react';
import "../src/HomePage.css";
import Banner from './components/banner/Banner';
import ApartmentList from './components/list/List';
import HomeImg from './assets/home_img.png';

function HomePage(props) {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" imageUrl={HomeImg} />
      <ApartmentList/>
    </div>
  );
}

export default HomePage;