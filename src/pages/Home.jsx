import React from 'react'
import About from './About'
import ComingSoon from './ComingSoon'
import HomeSlider from '../components/HomeSlider'

const Home = () => {
  return (
   <>
   <section className='home-page'>
     <div className="slider-section ">
      <HomeSlider />
    </div>
   </section>
   </>
  )
}

export default Home