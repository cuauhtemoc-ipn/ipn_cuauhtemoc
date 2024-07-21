import React from 'react'
import Descrpt from '../components/Home/Description'
import News from '@/components/Home/News'
import Proyect from '../components/Home/Projects'
import Sponsor from '../components/Home/Sponsors'
import Recruitment from '../components/Home/Recruitment'
import backgroundImage from '@/assets/background.png'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <div>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <Descrpt />
      <News />
      {/* <hr className='border border-light border-1 opacity-100' /> */}
      <Proyect />
      <Sponsor />
      <Recruitment />
      <Contact />
    </div>
  )
}

export default Home
