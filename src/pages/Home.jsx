import React from 'react'
import '../styles/home.css'
import HomeHero from '../components/HomeHero'
import Works from '../components/Works'
import About from '../components/About'
import Highlights from '../components/Highlights'
import FAQ from '../components/FAQ'
import Enroll from '../components/Enroll'
import Footer from '../components/Footer'
import Certificate from '../components/Certificate'

function Home() {
  return (
    <div className='home'>
      <HomeHero/>
      <Highlights/>
      <Enroll/>
      <Certificate/>
      <Works/>
      <About/>    
      <div className="container-fluid bg-main mt-5 offer-end-section p-3 d-flex justify-content-center">
          <a href="#register" className='text-decoration-none'>
          <div className="pay-highlight text-center bg-black">
          <p className="p-large"> Early Bird Offer : <b className='text-main'><big className='fs-3'>Free</big> </b>Bootcamp. register today<i class="bi bi-arrow-right mx-4"></i></p>
        </div>
          </a>
      </div>
      
      <Enroll/>
      <FAQ/>

    </div>
  )
}

export default Home
