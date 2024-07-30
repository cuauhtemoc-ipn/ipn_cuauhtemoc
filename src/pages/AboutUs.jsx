import React from 'react'
import backgroundImage from '@/assets/background.png'
import OurTeam from '../components/AboutUs/OurTeam'
import Mission from '../components/AboutUs/Mission'
import Subs from '../components/AboutUs/Subsections'
import Members from '../components/AboutUs/Members'

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
      <Members />
    </div>
  )
}

export default AboutUs
