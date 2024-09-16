import React from 'react'
import Recruitment from '../components/JoinUs/Join'
import backgroundImage from '@/assets/background.png'

const JoinUs = () => {
  return (
    <div className='container-xxl py-4 my-5 align-content-center'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <Recruitment />
    </div>
  )
}

export default JoinUs
