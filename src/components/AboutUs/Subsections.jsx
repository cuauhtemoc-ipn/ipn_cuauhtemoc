import React, { useState } from 'react'
import cansat from '@/assets/cansat.svg'
import presen from '@/assets/presentation.svg'

const Subs = () => {
  const sections = {
    Aerodinámica: {
      text: 'Contenido de Aerodinámica...',
      images: ['cansat.svg', 'presen.svg']
    },
    CDH: {
      text: 'Contenido de CDH...',
      images: ['cansat.svg', 'presen.svg']
    },
    EPS: {
      text: 'Contenido de EPS...',
      images: ['cansat.svg', 'presen.svg']
    },
    Mecánica: {
      text: 'Contenido de Mecánica...',
      images: ['cansat.svg', 'presen.svg']
    }
  }
  const [selectedSection, setSelectedSection] = useState('Aerodinámica')
  const handleSectionChange = section => {
    setSelectedSection(section)
  }

  return (
    <div className='container-xxl bg-dark px-0'>
      <div className='row justify-content-center mx-auto col-6'>
        <h1 className='text-center text-warning border-bottom border-4 border-warning w-50'>
          Subsecciones
        </h1>
      </div>
      <div className='row dynamic-sections text-light'>
        <h2>{selectedSection}</h2>
        <div className='row content justify-content-center col-7'>
          <p>{sections[selectedSection].text}</p>
          <div
            id='Subcarrousel'
            className='carousel slide carousel-fade col-12 col-md-6 col-lg-8'
            data-bs-ride='true'
          >
            <div className='carousel-inner'>
              {sections[selectedSection].images.map((imageName, index) => {
                const image = imageName === 'cansat.svg' ? cansat : presen
                return (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    data-bs-interval='4000'
                  >
                    <img
                      src={image}
                      className='d-block w-100 img-fluid col-7'
                      alt={`${selectedSection} ${index}`}
                    />
                  </div>
                )
              })}
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#Subcarrousel'
              data-bs-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#Subcarrousel'
              data-bs-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
        <div className='p-5 my-auto border border-4 border-white col-5'>
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
        <div className='buttons'>
          {Object.keys(sections).map(section => (
            <button
              key={section}
              className={selectedSection === section ? 'active' : ''}
              onClick={() => handleSectionChange(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Subs
