
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Companies from '../Components/Companies'
import Featured from '../Components/Featured'
import Category from '../Components/Category'
import TopCompanies from '../Components/TopCompanies'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Companies />
    <Featured />
    <Category />
    <TopCompanies />
    <Footer />
    </>
  )
}

export default LandingPage