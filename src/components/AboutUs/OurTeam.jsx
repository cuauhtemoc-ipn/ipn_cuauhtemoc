import React from 'react'
import info from '@/content/OurTeam.json'

const OurTeam = () => {
  const team = info.data[0]

  return (
    <div className='container-lg d-flex flex-column py-4 my-5'>
      <div className='row mx-0'>
        <div className='row align-items-center mx-0 my-5'>
          <h1 className='display-3 text-center text-light fw-semibold'>
            {team.name}
          </h1>
        </div>
        <div className='row justify-content-center align-items-center mx-0'>
          <div className='embed-responsive d-flex justify-content-center col-12 col-lg-7'>
            <iframe
              src={team.video[0]}
              width='560'
              height='315'
              style={{ border: 'none', overflow: 'hidden' }}
              allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
              allowFullScreen
              title='Facebook video'
            />
          </div>
          <div className='lead-lg text-light text-justify my-sm-4 my-lg-0 col-11 col-lg-5'>
            <p>{team.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
