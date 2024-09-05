import React from 'react'
import info from '@/assets/Sponsors/info.json'

const SponsorCard = () => {
  const card = (sponsor, index) => (
    <div
      key={index}
      className='d-flex justify-content-center align-items-center my-4 col-11 col-sm-10 col-md-9 col-lg-4'
    >
      <div className='card m-4 mx-auto col-10'>
        <div className='ratio ratio-4x3 border-bottom'>
          <img
            src={sponsor.content.find(item => item.type === 'image').value}
            className='card-img object-fit-contain p-2 rounded rounded-4'
            alt={sponsor.name}
          />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{sponsor.name}</h5>
          <p className='card-text text-justify'>
            {sponsor.content.find(item => item.type === 'text').value}
          </p>
          <div className='d-flex justify-content-center'>
            <a href={sponsor.page} className='btn btn-primary' target='blank'>
              ir al sitio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className='container-lg bg-dark bg-opacity-75 px-0 pb-4'>
      <div className='row justify-content-center align-items-center px-0 mx-0'>
        {info.data.map((member, index) => card(member, index))}
      </div>
    </div>
  )
}

export default SponsorCard
