import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import LimitedDeals from './components/LimitedDeals'
import FeaturedBrands from './components/FeaturedBrands'
import AboutUs from './components/AboutUs'
import WhyAster from './components/WhyAster'
import Client from './components/client/Client'
import FreaquentQuestion  from './components/FreaquentQuestion'
import ContactUs from './components/ContactUs'





function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <LimitedDeals/>
      <FeaturedBrands/>
      <AboutUs/>
      <WhyAster/>
      <Client/>
      <FreaquentQuestion />
      <ContactUs />
    </>
  )
}

export default App
