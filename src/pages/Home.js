import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Title1 from './components/Title1'
import Title2 from './components/Title2'
import Title3 from './components/Title3'
import Category from './components/Category'
import New from './components/New'
import Popular from './components/Popular';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Title1/>
      <Category/>
      <Title2/>
      <New/>
      <Title3/>
      <Popular/>
    </div>
  )
}

export default Home