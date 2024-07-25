import React from 'react'
import backgroundImage from '@/assets/background.png'
import OurTeam from '../components/AboutUs/OurTeam'
import Mission from '../components/AboutUs/Mission'
import Subs from '../components/AboutUs/Subsections'

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
      <Subs />
    </div>
  )
}

export default AboutUs
