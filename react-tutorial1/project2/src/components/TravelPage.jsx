import React from 'react'
import Header from "./Header"
import Page from "./Page"

function TravelPage() {
  return (
    <>
      <Header />
      <Page img='../src/assets/fuji.jpg' name="fuji" country="japan" location="Monte Fuji"/>
      <Page img='../src/assets/paris.jpg' name="paris" country="france" location="Tour Effiel"/>
      <Page img='../src/assets/rome.jpg' name="rome" country="italy" location="Colosseo"/>
    </>
  )
}

export default TravelPage
