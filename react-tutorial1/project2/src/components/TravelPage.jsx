import React from 'react'
import Header from "./Header"
import Page from "./Page"
import FujiImg from './../assets/fuji.jpg'
import ParisImg from './../assets/paris.jpg'
import RomeImg from './../assets/rome.jpg'

function TravelPage() {
  const fuji = {
    img: { img: RomeImg, name: 'Fuji' },
    country: 'Japan',
    location: 'Monte Fuji'
  };
  
  const paris = {
    img: { img: ParisImg, name: 'Paris' },
    country: 'France',
    location: 'Tour Eiffel'
  };
  
  const rome = {
    img: { img: RomeImg, name: 'Rome' },
    country: 'Italy',
    location: 'Colosseo'
  };
  return (
    <>
      <Header />
      <Page obj= {fuji}/>
      <Page obj= {paris}/>
      <Page obj= {rome}/>
    </>
  )
}

export default TravelPage
