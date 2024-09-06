import React from 'react'
import SponsorsDs from '../components/Sponsors/Sponsors'
import SponsorCard from '../components/Sponsors/SponsorCard'
import backgroundImage from '@/assets/background.png'

const Sponsors = () => {
  return (
    <div>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <SponsorsDs />
      <SponsorCard />
    </div>
  )
}

export default Sponsors
