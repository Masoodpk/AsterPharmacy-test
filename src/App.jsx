import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import LimitedDeals from './components/LimitedDeals'
import FeaturedBrands from './components/FeaturedBrands'



function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <LimitedDeals/>
      <FeaturedBrands/>
    </>
  )
}

export default App
