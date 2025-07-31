import React from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import TagLine from './components/TagLine'
import FeatureShowcase from './components/FeatureShowcase'
import SuccessStories from './components/SuccessStories'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <TagLine/>
    <FeatureShowcase/>
    <SuccessStories/>
    <CTASection/>
    <Footer/>
    </>
  )
}

export default App
