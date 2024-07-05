import React from 'react'
import Descrpt from '../components/Header/Description'
import News from '@/components/Home/News'

const Home = () => {
  return (
    <div className='content'>
      <div className='background-image' />
      <Descrpt />
      <News />
    </div>
  )
}

export default Home
