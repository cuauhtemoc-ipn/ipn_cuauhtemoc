import React from 'react'
import Descrpt from '../components/Header/Description'
import Proyect from '../components/Header/Projects'

const Home = () => {
  return (
    <div>
      <div className='background-image overflow-auto' />
      <Descrpt />
      <Proyect />
    </div>
  )
}

export default Home
