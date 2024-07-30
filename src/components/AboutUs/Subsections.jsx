import React, { useState } from 'react'
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
      images: [sub3, sub1]
    },
    CDH: {
      images: [sub2, sub1]
    },
    EPS: {
      images: [sub5, sub1]
    },
    Mecánica: {
      images: [sub4, sub1]
    }
  }
  const [selectedSection, setSelectedSection] = useState('Aerodinámica')
  const handleSectionChange = section => {
    setSelectedSection(section)
  }

  return (
    <div className='container-xxl bg-dark bg-opacity-75 px-0 py-5'>
      <div className='row justify-content-center mx-auto col-6'>
        <h1 className='text-center text-warning border-bottom border-4 border-warning w-50'>
          Subsecciones
        </h1>
      </div>
      <div className='row dynamic-sections text-light mx-0 my-4'>
        <div className='row mx-0 text-center content justify-content-center align-items-center col-7'>
          <h2>{selectedSection}</h2>
          <div
            id='Subcarrousel'
            className='carousel slide justify-content-center px-0 mx-0 col-12 col-md-6 col-lg-10'
            data-bs-ride='carousel'
            data-bs-interval='4000'
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
        <div className='row mx-0 p-5 my-auto border border-4 border-white bg-gray col-5'>
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
        <div className='row buttons justify-content-center px-0 mt-4 mx-0'>
          {Object.keys(sections).map(section => (
            <div
              key={section}
              className='col-md-2 mb-3 d-flex justify-content-center px-0'
            >
              <button
                className={`btn btn-block btn-outline-light bg-gray ${
                  selectedSection === section ? 'active' : ''
                } d-flex flex-column align-items-center col-12 p-0`}
                onClick={() => handleSectionChange(section)}
              >
                <span>{section}</span>
                <img
                  src={sec}
                  className='img-fluid mt-2 w-100'
                  alt={`${section} image`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Subs
