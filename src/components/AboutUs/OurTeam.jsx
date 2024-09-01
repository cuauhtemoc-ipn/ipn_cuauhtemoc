import React from 'react'
import info from '@/assets/OurTeam/info.json'

const OurTeam = () => {
  const team = info.data[0]

  return (
    <div className='container-lg d-flex flex-column justify-content-center h-full py-4 my-5 my-lg-0'>
      <div className='row mx-0'>
        <div className='row align-items-center mx-0 my-5'>
          <h1 className='display-3 text-center text-light fw-semibold'>
            {team.name}
          </h1>
        </div>
        <div className='row justify-content-center align-items-center mx-0'>
          <div className='embed-responsive d-flex justify-content-center col-12 col-lg-7'>
            <video
              className='col-12 col-sm-11 col-md-10 col-lg-12 col-xl-11'
              controls
              src={team.video[0]}
              type='video/mp4'
            />
          </div>
          <div className='text-light text-justify my-4 my-lg-0 col-11 col-lg-5'>
            <p>{team.content[0].value}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
