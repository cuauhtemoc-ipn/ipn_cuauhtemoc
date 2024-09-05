import React from 'react'
import SponsorsDs from '../components/Sponsors/Sponsors'
import SponsorCard from '../components/Sponsors/SponsorCard'
import backgroundImage from '@/assets/background.png'

const Sponsors = () => {
  return (
    <div className='container-xxl h-full py-5 py-lg-4 align-content-center'>
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
