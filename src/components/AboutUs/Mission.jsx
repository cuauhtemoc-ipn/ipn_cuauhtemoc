import React from 'react'
import cansat from '@/assets/cansat.svg'
import presen from '@/assets/presentation.svg'
import pcb from '@/assets/pcb.svg'

const Mission = () => {
  return (
    <div className='container-xxl bg-dark px-0'>
      <div className='row justify-content-center align-items-center'>
        <div className='row justify-content-center col-8'>
          <div
            id='Missioncarousel'
            className='carousel slide col-12 col-md-6 col-lg-8'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active' data-bs-interval='4000'>
                <img
                  src={cansat}
                  className='d-block w-100 col-7'
                  style={{ height: '300px' }}
                  alt='...'
                />
              </div>
              <div className='carousel-item' data-bs-interval='4000'>
                <img
                  src={presen}
                  className='d-block w-100 col-7'
                  style={{ height: '300px' }}
                  alt='...'
                />
              </div>
              <div className='carousel-item' data-bs-interval='4000'>
                <img
                  src={pcb}
                  className='d-block w-100 col-7'
                  style={{ height: '300px' }}
                  alt='...'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#Missioncarousel'
              data-bs-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#Missioncarousel'
              data-bs-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
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
      <div className='row mx-0 justify-content-center align-items-center'>
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
        <div className='row justify-content-center col-8'>
          <div
            id='Vissioncarousel'
            className='carousel slide col-12 col-md-6 col-lg-8'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active' data-bs-interval='4000'>
                <img
                  src={cansat}
                  className='d-block w-100 col-7'
                  style={{ height: '300px' }}
                  alt='...'
                />
              </div>
              <div className='carousel-item' data-bs-interval='4000'>
                <img
                  src={presen}
                  className='d-block w-100 col-7'
                  style={{ height: '300px' }}
                  alt='...'
                />
              </div>
              <div className='carousel-item' data-bs-interval='4000'>
                <img
                  src={pcb}
                  className='d-block w-100 col-7'
                  style={{ height: '300px' }}
                  alt='...'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#Vissioncarousel'
              data-bs-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#Vissioncarousel'
              data-bs-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
