/* eslint-disable no-new */
import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'bootstrap'
import info from '@/content/Sections.json'

const Subs = () => {
  const sections = info.data.reduce((acc, section) => {
    acc[section.name] = {
      title: section.title,
      btnImage: section.btnImage,
      text: section.description,
      images: section.images
    }
    return acc
  }, {})

  // Initialize the variable where the link to the carousel is going to be stored.
  // We set the link (useRef) poiting at the carousel as null as it should be empty
  // in the beginning.
  const carouselRef = useRef(null)
  const imageCarouselRef = useRef(null)

  // useEffect will let us interact with the carousel once it has already appeared
  // on the screen.
  // carouselRef.current is the reference to the carousel once it has already
  // appeared on the screen, meaning there is something being shown already.
  // We verify if carouselRef.current is true so we can make it work as bootstrap
  // carousel with new Carousel (in this case automatic transition).
  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current)
    }
  }, [])

  // Same instructions for this useEffect.
  useEffect(() => {
    if (imageCarouselRef.current) {
      new Carousel(imageCarouselRef.current)
    }
  }, [])

  // We create the variable selectedSection to save the current value of the
  // selected section, meanwhile setSelectedSection allows to change the value of
  // selectedSection. Using usestate we intialize the value of the variable with
  // the Aerodynamic section.
  const [selectedSection, setSelectedSection] = useState('Mecánica')

  // Here we create the function handleSectionChange which can take any value
  // that the user selects, the content of the function stablishes that
  // setSelectedSection will take the value of the section that the user selects
  // by using setSelectedSection(section), for that we need to pass a parameter
  // to section when calling it.
  const handleSectionChange = section => {
    setSelectedSection(section)
  }

  useEffect(() => {
    const handleSlide = event => {
      const activeIndex = event.to
      const newSelectedSection = Object.keys(sections)[activeIndex]
      setSelectedSection(newSelectedSection)
    }

    const carouselElement = carouselRef.current
    if (carouselElement) {
      carouselElement.addEventListener('slide.bs.carousel', handleSlide)
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('slide.bs.carousel', handleSlide)
      }
    }
  }, [])

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

  const updateTitleCarousel = () => {
    setTimeout(() => {
      if (!isLargeScreen && carouselRef.current) {
        const carousel = Carousel.getInstance(carouselRef.current) // Obtener instancia del carrusel
        const activeIndex = Object.keys(sections).indexOf(selectedSection) // Encontrar índice de la sección seleccionada
        carousel.to(activeIndex) // Mover el carrusel al índice correcto
      }
    }, 0)
  }

  useEffect(() => {
    updateTitleCarousel()
  }, [isLargeScreen, selectedSection])

  const fadeInStyle = {
    animation: 'fadeIn 1s ease-in-out'
  }

  const ImportDrivePhoto = (driveUrl, height) => {
    // Default URL in case no valid file ID is found
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    // Try to extract the file ID from the Google Drive URL
    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    // Construct the new URL with the specified height
    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  const Imgcarousel = (
    <div className='row d-none d-md-flex content justify-content-center align-items-center mx-0 col-lg-7'>
      <div
        id='Imgcarrousel'
        className='carousel slide justify-content-center px-0 mx-0 col-12 col-md-9 col-lg-12'
        data-bs-ride='carousel'
        data-bs-interval='4000'
        ref={imageCarouselRef}
        key={selectedSection}
        style={fadeInStyle}
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
                    src={ImportDrivePhoto(imageName, 600)}
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
    <div
      className='row d-none d-md-flex border border-4 border-white bg-gray bg-opacity-50 p-4 p-sm-4 p-lg-5 mx-auto mb-5 mb-lg-0 col-11 col-md-10 col-lg-5'
      key={selectedSection}
      style={fadeInStyle}
    >
      <p className='lead-lg text-justify'>
        {sections[selectedSection].text}
      </p>
    </div>
  )

  const Seccarousel = (
    <div className='row d-block d-md-none text-center content justify-content-center align-items-center px-0 mx-0 col-lg-7'>
      <div
        id='Seccarrousel'
        className='carousel slide justify-content-center px-0 mx-auto col-8 col-sm-6'
        ref={carouselRef}
      >
        <div className='carousel-inner'>
          {Object.keys(sections).map((section, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div
                className='row px-0 mx-0'
              >
                <h2 className='text-center'>{section}</h2>
              </div>
            </div>
          ))}
        </div>

        <button
          className='carousel-control-prev justify-content-center'
          type='button'
          data-bs-target='#Seccarrousel'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next justify-content-center'
          type='button'
          data-bs-target='#Seccarrousel'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      <div
        className='row border border-4 border-white bg-gray bg-opacity-50 p-4 p-sm-5 mx-auto m-5 col-11 col-md-10 col-lg-5'
        key={selectedSection}
        style={fadeInStyle}
      >
        <p className='text-justify'>
          {sections[selectedSection].text}
        </p>
      </div>

      <div className='row d-flex content justify-content-center align-items-center mx-0 col-lg-7'>
        <div
          id={`imageCarousel-${selectedSection}`}
          className='carousel slide justify-content-center px-0 mx-0 col-11'
          data-bs-ride='carousel'
          data-bs-interval='4000'
          ref={imageCarouselRef}
          key={selectedSection}
          style={fadeInStyle}
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
                      src={ImportDrivePhoto(imageName, 600)}
                      className='d-block img-fluid h-100'
                      alt={`${selectedSection} imagen ${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className='carousel-control-prev justify-content-start'
            type='button'
            data-bs-target={`#imageCarousel-${selectedSection}`}
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next justify-content-end'
            type='button'
            data-bs-target={`#imageCarousel-${selectedSection}`}
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className='container-lg bg-dark bg-opacity-75 px-0 py-4'>
      <div className='row justify-content-center mx-0'>
        <div className='justify-content-center border-bottom border-4 border-primary my-5 col-6 col-sm-4 col-lg-3'>
          <h3 className='text-center text-primary display-5 fw-bold'>
            Secciones
          </h3>
        </div>
        <div className='row dynamic-sections text-light px-0 mx-0'>
          <div className='row d-none d-md-flex buttons justify-content-center align-items-center px-0 mx-0 my-5'>
            {Object.keys(sections).map(section => (
              <div
                key={section}
                className='row justify-content-center mx-0 col-3 col-xl-2'
              >
                <div className='d-flex justify-content-center px-0 col-11 col-lg-10 col-xl-12'>
                  <button
                    className={`btn btn-block btn-outline-light border-3 ${
                      selectedSection === section ? 'active ' : ''
                    } d-flex flex-column align-items-center p-0 rounded-4 col-10`}
                    onClick={() => handleSectionChange(section)}
                  >
                    <span className='lead lh-lg'>{section}</span>
                    <div className='ratio ratio-1x1'>
                      <img
                        src={ImportDrivePhoto(sections[section].btnImage, 300)}
                        className='img-fluid object-fit-cover rounded-4'
                        alt={`${sections[section].title} image`}
                      />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            className='row px-0 mx-0'
          >
            <h2
              className='d-none d-md-block text-center my-5'
              key={selectedSection}
              style={fadeInStyle}
            >
              {selectedSection}
            </h2>
            {isLargeScreen
              ? (
                <>
                  {Imgcarousel}
                  {Sectext}
                </>
                )
              : (
                <>
                  {Sectext}
                  {Imgcarousel}
                  {Seccarousel}
                </>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subs
