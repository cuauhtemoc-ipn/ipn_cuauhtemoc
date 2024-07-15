import React from 'react'
import Descrpt from '../components/Home/Description'
import News from '@/components/Home/News'
import Proyect from '../components/Home/Projects'
import Sponsor from '../components/Home/Sponsors'
import Recruitment from '../components/Home/Recruitment'

const Home = () => {
  return (
    <div>
      <div className='background-image' />
      <Descrpt />
      <News />
      {/* <hr className='border border-light border-1 opacity-100' /> */}
      <Proyect />
      <Sponsor />
      <Recruitment />

    </div>
  )
}

export default Home
