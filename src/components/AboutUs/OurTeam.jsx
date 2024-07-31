import React from 'react'
import camp from '@/assets/camp.mp4'

const OurTeam = () => {
  return (
    <div className='container-xxl d-flex flex-column justify-content-center h-full py-4 my-5 my-lg-0'>
      <div className='row mx-0'>
        <div className='row align-items-center mx-0 my-5'>
          <h1 className='display-3 text-center text-light fw-semibold'>
            Nuestro Equipo
          </h1>
        </div>
        <div className='row justify-content-center align-items-center mx-0'>
          <div className='embed-responsive text-center d-flex justify-content-center col-12 col-lg-8 col-xl-7'>
            <video
              className='col-11'
              controls
              src={camp}
              type='video/mp4'
            />
          </div>
          <div className='text-light col-lg-4 col-xl-5'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Convallis posuere morbi leo urna molestie at elementum eu
              facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem
              mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec
              nam aliquam.
            </p>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Convallis posuere morbi leo urna molestie at elementum eu
              facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem
              mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec
              nam aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
