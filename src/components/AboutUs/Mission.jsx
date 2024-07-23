import React from 'react'
import cansat from '@/assets/cansat.svg'

const Mission = () => {
  return (
    <div className='container-xxl bg-dark'>
      <div className='row mx-0 justify-content-center align-items-center'>
        <div className='text-center col-12 col-md-6 col-lg-8 my-5 my-lg-0 '>
          <img
            src={cansat}
            className='img-fluid col-7'
            alt='IPN Cuauhtemoc image'
          />
        </div>
        <div className='text-light border border-4 border-white p-5 bg-gray col-4'>
          <h2 className='text-center text-warning'>Misión</h2>
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
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
