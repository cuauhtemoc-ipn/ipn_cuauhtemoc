import React from 'react'
import cansat from '@/assets/cansat.svg'
import presen from '@/assets/presentation.svg'
import pcb from '@/assets/pcb.svg'

const Mission = () => {
  return (
    <div className='container-xxl bg-dark bg-opacity-75 px-0 pb-5'>
      <div className='row justify-content-center align-items-center mx-0'>
        <div
          id='Missioncarousel1'
          className='carousel slide col-12 col-md-6 col-lg-8 justify-content-center px-0 mx-0'
          data-bs-ride='carousel'
          data-bs-interval='4000'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active ratio ratio-16x9'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={cansat} className='d-block h-75 col-12' alt='...' />
              </div>
            </div>
            <div className='carousel-item ratio ratio-16x9'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={presen} className='d-block h-75 col-12' alt='...' />
              </div>
            </div>
            <div className='carousel-item ratio ratio-16x9'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={pcb} className='d-block h-75 col-12' alt='...' />
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#Missioncarousel1'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#Missioncarousel1'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
        <div className='text-light border border-4 border-white p-5 bg-gray col-4'>
          <div className='row justify-content-center'>
            <h2 className='text-center text-warning border-bottom border-4 border-warning w-50'>
              Misión
            </h2>
          </div>
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
      <div className='row justify-content-center align-items-center mx-0'>
        <div className='text-light border border-4 border-white p-5 bg-gray col-4'>
          <div className='row justify-content-center'>
            <h2 className='text-center text-warning border-bottom border-4 border-warning w-50'>
              Visión
            </h2>
          </div>
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
        <div
          id='Missioncarousel2'
          className='carousel slide col-12 col-md-6 col-lg-8 justify-content-center px-0 mx-0'
          data-bs-ride='carousel'
          data-bs-interval='4000'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active ratio ratio-16x9'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={cansat} className='d-block h-75 col-12' alt='...' />
              </div>
            </div>
            <div className='carousel-item ratio ratio-16x9'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={presen} className='d-block h-75 col-12' alt='...' />
              </div>
            </div>
            <div className='carousel-item ratio ratio-16x9'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={pcb} className='d-block h-75 col-12' alt='...' />
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#Missioncarousel2'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#Missioncarousel2'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mission
