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
      title: 'Aerodinámica',
      images: [sub3, sub1],
      text: 'Texto para la sección de Aerodinámica'
    },
    CDH: {
      title: 'CDH',
      images: [sub2, cansat],
      text: 'Texto para la sección de CDH'
    },
    EPS: {
      title: 'EPS',
      images: [sub5, presen],
      text: 'Texto para la sección de EPS'
    },
    Mecánica: {
      title: 'Mecánica',
      images: [sub4, sec],
      text: 'Texto para la sección de Mecánica'
    }
  }

  const carouselRef = useRef(null)
  const imageCarouselRef = useRef(null)

  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current)
    }
  }, [])

  useEffect(() => {
    if (imageCarouselRef.current) {
      new Carousel(imageCarouselRef.current)
    }
  }, [])

  const [openSections, setOpenSections] = useState([])

  const toggleSection = index => {
    setOpenSections(prevOpenSections =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter(i => i !== index)
        : [...prevOpenSections, index]
    )
  }

  const [selectedSection, setSelectedSection] = useState('Aerodinámica')
  const handleSectionChange = section => {
    setSelectedSection(section)
  }
  const [activeSection, setActiveSection] = useState(0)

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

  const Imgcarousel = (
    <div className='row d-none d-md-flex content justify-content-center align-items-center mx-0 col-lg-7'>
      <div
        id='Imgcarrousel'
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
          data-bs-target='#Imgcarrousel'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next justify-content-end'
          type='button'
          data-bs-target='#Imgcarrousel'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )

  const Sectext = (
    <div className='row d-none d-md-block border border-4 border-white bg-gray p-4 p-sm-5 mx-auto mb-5 col-11 col-md-10 col-lg-5'>
      <p>{sections[selectedSection].text}</p>
    </div>
  )

  const Seccarousel1 = (
    <div className='row d-block d-md-none text-center content justify-content-center align-items-center mx-0 col-lg-7'>
      <div
        id='Seccarrousel'
        className='carousel slide justify-content-center px-0 mx-0 col-12 col-md-9 col-lg-12'
        ref={carouselRef}
      >
        <div className='carousel-inner'>
          {Object.keys(sections).map((section, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className='row px-0 mx-0'>
                <h2 className='text-center mb-5'>{sections[section].title}</h2>
              </div>
              <div className='row border border-4 border-white bg-gray p-4 p-sm-5 mx-auto mb-5 col-11 col-md-10 col-lg-5'>
                <p>{sections[section].text}</p>
              </div>

              <div
                id={`imageCarousel-${index}`}
                className='carousel slide'
                data-bs-ride='carousel'
                data-bs-interval='4000'
                ref={imageCarouselRef}
              >
                <div className='carousel-inner'>
                  {sections[section].images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`carousel-item ${
                        imgIndex === 0 ? 'active' : ''
                      }`}
                    >
                      <div className='ratio ratio-16x9'>
                        <div className='d-flex justify-content-center align-items-center'>
                          <img
                            src={image}
                            className='d-block h-100 col-12'
                            alt={`${section} imagen ${imgIndex + 1}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target={`#imageCarousel-${index}`}
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target={`#imageCarousel-${index}`}
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className='carousel-control-prev justify-content-end'
          type='button'
          data-bs-target='#Seccarrousel'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next justify-content-end'
          type='button'
          data-bs-target='#Seccarrousel'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )

  const Seccarousel2 = (
    <div className='accordion d-md-none' id='accordionSections'>
      {Object.keys(sections).map((section, index) => (
        <div key={index} className='accordion-item bg-transparent'>
          <h2 className='accordion-header' id={`heading${index}`}>
            <button
              className={`accordion-button bg-dark text-light ${
                index !== activeSection ? 'collapsed' : ''
              }`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#collapse${index}`}
              aria-expanded={`${index === activeSection ? 'true' : 'false'}`}
              aria-controls={`collapse${index}`}
              onClick={() => toggleSection(index)}
            >
              {sections[section].title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === activeSection ? 'show' : ''
            }`}
            aria-labelledby={`heading${index}`}
          >
            <div className='accordion-body'>
              <div className='row border border-4 border-white bg-gray p-4 p-sm-5 mx-auto mb-5 col-11 col-md-10 col-lg-5'>
                <p>{sections[section].text}</p>
              </div>
              <div
                id={`imageCarousel-${index}`}
                className='carousel slide'
                data-bs-ride='carousel'
                data-bs-interval='4000'
                ref={imageCarouselRef}
              >
                <div className='carousel-inner'>
                  {sections[section].images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`carousel-item ${
                        imgIndex === 0 ? 'active' : ''
                      }`}
                    >
                      <div className='ratio ratio-16x9'>
                        <div className='d-flex justify-content-center align-items-center'>
                          <img
                            src={image}
                            className='d-block img-fluid h-100'
                            alt={`${section} imagen ${imgIndex + 1}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target={`#imageCarousel-${index}`}
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target={`#imageCarousel-${index}`}
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className='container-lg bg-dark bg-opacity-75 px-0 py-4'>
      <div className='row justify-content-center mx-0'>
        <h1 className='text-center text-gold border-bottom border-4 border-gold my-5 col-7 col-sm-4 col-md-3 col-xxl-2'>
          Secciones
        </h1>
        <div className='row dynamic-sections text-light px-0 mx-0'>
          <div className='row d-none d-md-flex buttons justify-content-center align-items-center px-0 mx-0 mb-lg-5'>
            {Object.keys(sections).map(section => (
              <div
                key={section}
                className='row justify-content-center mx-0 mb-5 mb-lg-0 col-3 col-lg-3'
              >
                <div className='d-flex justify-content-center px-0 col-9 col-md-12'>
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
          <div className='row px-0 mx-0'>
            <h2 className='d-none d-md-block text-center mb-5'>
              {selectedSection}
            </h2>
            {isLargeScreen ? (
              <>
                {Imgcarousel}
                {Sectext}
              </>
            ) : (
              <>
                {Seccarousel2}
                {Imgcarousel}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subs
