import React from 'react'
import Header from "./Header"
import Page from "./Page"
import TravelPageData from './TravelPageData'


function TravelPage() {
  const cards = TravelPageData.map((data,index)=>{
    return (
      <Page key= {index} //Use always id if you have it!
      obj = {data}></Page>
    )
  })
  
  return (
    <>
      <Header />
      {cards}
    </>
  )
}

export default TravelPage
