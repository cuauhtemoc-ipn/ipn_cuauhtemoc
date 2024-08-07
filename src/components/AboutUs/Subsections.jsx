import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'bootstrap'
import cansat from '@/assets/cansat.svg'
import presen from '@/assets/presentation.svg'
import sec from '@/assets/sec.svg'
import sub1 from '@/assets/sub1.jpg'
import sub2 from '@/assets/sub2.jpg'
import sub3 from '@/assets/sub3.jpg'
import sub4 from '@/assets/sub4.jpg'
import sub5 from '@/assets/sub5.jpg'

const Subs = () => {
  const sections = {
    Aerodinámica: {
      images: [sub3, sub1],
      text: 'Texto para la sección de Aerodinámica'
    },
    CDH: {
      images: [sub2, cansat],
      text: 'Texto para la sección de CDH'
    },
    EPS: {
      images: [sub5, presen],
      text: 'Texto para la sección de EPS'
    },
    Mecánica: {
      images: [sub4, sec],
      text: 'Texto para la sección de Mecánica'
    }
  }
  const carouselRef = useRef(null)

  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current)
    }
  }, [])

  const [selectedSection, setSelectedSection] = useState('Aerodinámica')
  const handleSectionChange = section => {
    setSelectedSection(section)
  }

  const Imgcarousel = (
    <div className='row mx-0 text-center content justify-content-center align-items-center col-lg-7'>
      <div
        id='Subcarrousel'
        className='carousel slide justify-content-center px-0 mx-0 col-12 col-md-9 col-lg-12'
        data-bs-ride='carousel'
        data-bs-interval='4000'
        ref={carouselRef}
      >
        <div className='carousel-inner'>
          {sections[selectedSection].images.map((imageName, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className='ratio ratio-16x9'>
                <div className='d-flex justify-content-center align-items-center'>
                  <img
                    src={imageName}
                    className='d-block img-fluid h-100'
                    alt={`${selectedSection} ${index}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className='carousel-control-prev justify-content-start'
          type='button'
          data-bs-target='#Subcarrousel'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next justify-content-end'
          type='button'
          data-bs-target='#Subcarrousel'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )

  const Sectext = (
    <div className='row border border-4 border-white bg-gray  p-4 p-sm-5 mx-auto mb-5 col-md-10 col-lg-5'>
      <p>{sections[selectedSection].text}</p>
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
    <div className='container-xxl'>
      <div className='bg-dark bg-opacity-75 px-0 py-4 mx-2 mx-sm-5'>
        <div className='row justify-content-center mx-0'>
          <h1 className='text-center text-gold border-bottom border-4 border-gold my-5 col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3'>
            Subsecciones
          </h1>
          <div className='row dynamic-sections text-light px-0 mx-0'>
            <div className='row d-flex buttons justify-content-center align-items-center px-0 mx-0 mb-lg-5'>
              {Object.keys(sections).map(section => (
                <div
                  key={section}
                  className='row justify-content-center mx-0 mb-5 mb-lg-0 col-6 col-lg-3'
                >
                  <div className='d-flex justify-content-center px-0 col-9 col-md-9 col-lg-12'>
                    <button
                      className={`btn btn-block btn-outline-light border-3 ${
                        selectedSection === section ? 'active ' : ''
                      } d-flex flex-column align-items-center p-0 rounded-4 col-10`}
                      onClick={() => handleSectionChange(section)}
                    >
                      <span className='m-1'>{section}</span>
                      <div className='ratio ratio-1x1'>
                        <img
                          src={sub1}
                          className='img-fluid rounded-4'
                          alt={`${section} image`}
                        />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className='row mx-0'>
              <h2 className='text-center mb-5'>{selectedSection}</h2>
              {isLargeScreen ? (
                <>
                  {Imgcarousel}
                  {Sectext}
                </>
              ) : (
                <>
                  {Sectext}
                  {Imgcarousel}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subs
