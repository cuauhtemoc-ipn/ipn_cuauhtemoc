import React from 'react'
import Descrpt from '../components/Header/Description'
import News from '@/components/Home/News'
import Proyect from '../components/Header/Projects'

const Home = () => {
  return (
    <div className='background-image overflow-auto'>
      <Descrpt />
      <News />
      <Proyect />
    </div>
  )
}

export default Home
