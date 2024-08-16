import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'bootstrap'
import cansat from '@/assets/cansat.svg'
import presen from '@/assets/presentation.svg'
import pcb from '@/assets/pcb.svg'

const Mission = () => {
  const carouselRef1 = useRef(null)
  const carouselRef2 = useRef(null)

  useEffect(() => {
    if (carouselRef1.current) {
      new Carousel(carouselRef1.current)
    }
    if (carouselRef2.current) {
      new Carousel(carouselRef2.current)
    }
  }, [])

  const Missioncarousel = (
    <div
      id='Missioncarousel'
      className='carousel slide justify-content-center px-0 mx-auto mt-5 mt-lg-0 col-11 col-sm-10 col-md-9 col-lg-7'
      data-bs-ride='carousel'
      data-bs-interval='4000'
      ref={carouselRef1}
    >
      <div className='carousel-inner'>
        <div className='carousel-item active ratio ratio-16x9'>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={cansat} className='d-block h-100 col-12' alt='...' />
          </div>
        </div>
        <div className='carousel-item ratio ratio-16x9'>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={presen} className='d-block h-100 col-12' alt='...' />
          </div>
        </div>
        <div className='carousel-item ratio ratio-16x9'>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={pcb} className='d-block h-100 col-12' alt='...' />
          </div>
        </div>
      </div>
      <button
        className='carousel-control-prev justify-content-start'
        type='button'
        data-bs-target='#Missioncarousel'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next justify-content-end'
        type='button'
        data-bs-target='#Missioncarousel'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )

  const TextMission = (
    <div className='text-light border border-4 border-white p-4 p-sm-5 bg-gray mx-auto mx-lg-0 col-11 col-md-10 col-lg-5 col-xl-4'>
      <div className='row justify-content-center mx-0 mb-2'>
        <h2 className='text-center text-gold border-bottom border-4 border-gold col-5 col-sm-4 col-lg-6 col-xl-7'>
          Misión
        </h2>
      </div>
      <p className='lead lh-lg text-justify mx-auto mx-lg-0 col-12 col-sm-11 col-lg-12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Convallis posuere
        morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla
        pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae
        tempus quam pellentesque nec nam aliquam.
      </p>
      <p className='lead lh-lg text-justify mx-auto mx-lg-0 col-12 col-sm-11 col-lg-12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Convallis posuere
        morbi leo urna molestie at elementum eu facilisis.
      </p>
    </div>
  )

  const Visioncarousel = (
    <div
      id='Visioncarousel'
      className='carousel slide justify-content-center px-0 mx-auto mt-5 mt-lg-0 col-11 col-sm-10 col-md-9 col-lg-7'
      data-bs-ride='carousel'
      data-bs-interval='4000'
      ref={carouselRef2}
    >
      <div className='carousel-inner'>
        <div className='carousel-item active ratio ratio-16x9'>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={cansat} className='d-block h-100 col-12' alt='...' />
          </div>
        </div>
        <div className='carousel-item ratio ratio-16x9'>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={presen} className='d-block h-100 col-12' alt='...' />
          </div>
        </div>
        <div className='carousel-item ratio ratio-16x9'>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={pcb} className='d-block h-100 col-12' alt='...' />
          </div>
        </div>
      </div>
      <button
        className='carousel-control-prev justify-content-start'
        type='button'
        data-bs-target='#Visioncarousel'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next justify-content-end'
        type='button'
        data-bs-target='#Visioncarousel'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )

  const TextVision = (
    <div className='text-light border border-4 border-white p-4 p-sm-5 bg-gray mx-auto mx-lg-0 mt-5 mt-lg-0 col-11 col-md-10 col-lg-5 col-xl-4'>
      <div className='row justify-content-center mx-0 mb-2'>
        <h2 className='text-center text-gold border-bottom border-4 border-gold col-5 col-sm-4 col-lg-6 col-xl-7'>
          Visión
        </h2>
      </div>
      <p className='lead lh-lg text-justify mx-auto mx-lg-0 col-12 col-sm-11 col-lg-12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Convallis posuere
        morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla
        pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae
        tempus quam pellentesque nec nam aliquam.
      </p>
      <p className='lead lh-lg text-justify mx-auto mx-lg-0 col-12 col-sm-11 col-lg-12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Convallis posuere
        morbi leo urna molestie at elementum eu facilisis.
      </p>
    </div>
  )

  const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 992)

  useEffect(() => {
    // Function to detect screem size
    const handleResize = () => {
      setLargeScreen(window.innerWidth >= 992) // 992px is the breakpoint for 'lg' in Bootstrap
    }
    // Add listener to detect changes in screen size
    window.addEventListener('resize', handleResize)

    // Call handleResize at the start to stablish the initial state
    handleResize()

    // Clean the listener when the component is disassembled
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='container-lg bg-dark bg-opacity-75 px-0 pb-4'>
      <div className='row justify-content-between align-items-center mx-0'>
        {isLargeScreen ? (
          <>
            {Missioncarousel}
            {TextMission}
          </>
        ) : (
          <>
            {TextMission}
            {Missioncarousel}
          </>
        )}
      </div>
      <div className='row justify-content-between align-items-center mx-0'>
        {TextVision}
        {Visioncarousel}
      </div>
    </div>
  )
}

export default Mission
