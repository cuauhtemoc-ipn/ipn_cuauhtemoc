import React from 'react'
import camp from '@/assets/camp.mp4'

const OurTeam = () => {
  return (
    <div className='container-xxl h-full py-4 my-5 my-lg-0 '>
      <h1 className='display-3 text-center text-light fw-semibold my-5'>
        Nuestro Equipo
      </h1>
      <div className='row mx-0 justify-content-center align-items-center'>
        <div className='text-center col-12 col-md-6 col-lg-7 my-5 my-lg-0 '>
          <video width='640' height='360' controls>
            <source src={camp} type='video/mp4' />
          </video>
        </div>
        <div className='text-light col-5'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Convallis posuere morbi leo urna molestie at elementum eu facilisis.
            Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut.
            Auctor neque vitae tempus quam pellentesque nec nam aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Convallis posuere morbi leo urna molestie at elementum eu facilisis.
            Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut.
            Auctor neque vitae tempus quam pellentesque nec nam aliquam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
