import React from 'react'
import camp from '@/assets/camp.mp4'

const OurTeam = () => {
  return (
    <div className='container-lg d-flex flex-column justify-content-center h-full py-4 my-5 my-lg-0'>
      <div className='row mx-0'>
        <div className='row align-items-center mx-0 my-5'>
          <h1 className='display-3 text-center text-light fw-semibold'>
            Nuestro Equipo
          </h1>
        </div>
        <div className='row justify-content-center align-items-center mx-0'>
          <div className='embed-responsive d-flex justify-content-center col-12 col-lg-7'>
            <video
              className='col-12 col-sm-11 col-md-10 col-lg-12 col-xl-11'
              controls
              src={camp}
              type='video/mp4'
            />
          </div>
          <div className='text-light my-4 my-lg-0 col-11 col-lg-5'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Convallis posuere morbi leo urna molestie at elementum eu
              facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem
              mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec
              nam aliquam.
            </p>
            <p>
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
