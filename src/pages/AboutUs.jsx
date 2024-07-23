import React from 'react'
import backgroundImage from '@/assets/background.png'
import OurTeam from '../components/AboutUs/OurTeam'
import Mission from '../components/AboutUs/Mission'

const AboutUs = () => {
  return (
    <div>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <OurTeam />
      <Mission />
    </div>
  )
}

export default AboutUs
