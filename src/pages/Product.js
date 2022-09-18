import React from 'react'
import Card from './components/Card'
import Navbar from "./components/Navbar"
import Navtabs from './components/Navtabs'
import DetailProduct from './components/DetailProduct'
import Title5 from './components/Title5'
import Popular from './components/Popular'

const Product = () => {
  return (
    <div sx={{ marginTop : '2vh'}}>
      <Navbar/>
      <Navtabs/>
      <Card/>
      <DetailProduct/>
      <Title5/>
      <Popular/>
    </div>
  )
}

export default Product