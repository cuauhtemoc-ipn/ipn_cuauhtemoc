import React from 'react'
import Descrpt from '../components/Home/Description'
import News from '@/components/Home/News'
import Proyect from '../components/Home/Projects'
import Sponsor from '../components/Home/Sponsors'

const Home = () => {
  return (
    <div>
      <div className='background-image' />
      <Descrpt />
      <News />
      <Proyect />
      <Sponsor />
    </div>
  )
}

export default Home
