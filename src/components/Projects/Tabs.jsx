/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Carousel, Modal } from 'react-bootstrap'

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.length - 1)
  const [chunkSize, setChunksize] = useState(3)
  const [size, setSize] = useState(3)
  const [showModal, setShowModal] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const handleImageClick = image => {
    setCurrentImage(image)
    setShowModal(true)
  }

  const handleCloseModal = () => setShowModal(false)

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  useEffect(() => {
    // Function to update the variable value based on window width
    const updateVariableValue = () => {
      if (window.innerWidth > 992) {
        setChunksize(3)
        setSize(3)
      } else if (window.innerWidth > 768) {
        setChunksize(2)
        setSize(5)
      } else {
        setChunksize(1)
        setSize(8)
      }
    }
    // Event listener for window resize
    window.addEventListener('resize', updateVariableValue)

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateVariableValue)
    }
  }, [])

  const loadTabTitles = () => {
    const tabs = []
    data.forEach((entry, index) => {
      tabs.push(
        <li
          className='nav-item bg-gray rounded-top-2 border-start border-end'
          role='presentation'
          key={'title' + index}
        >
          <button
            className={`nav-link ${
              activeTab === index ? 'bg-light rounded-top-2 fw-bolder' : ''
            } text-dark`}
            id={`tab${index}`}
            data-bs-toggle='tab'
            type='button'
            role='tab'
            aria-controls='home'
            aria-selected={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            {entry.edition}
          </button>
        </li>
      )
    })
    return tabs
  }

  const loadTabContent = () => {
    const tabs = []
    data.forEach((entry, index) => {
      tabs.push(
        <div
          className={`tab-pane fade ${
            activeTab === index ? 'show active' : ''
          } bg-gray bg-opacity-25`}
          id='home'
          role='tabpanel'
          aria-labelledby={`tab${index}`}
          key={'content' + index}
        >
          <h2 className='text-center p-3 pt-4 text-light display-3  fw-bold'>
            {entry.name + ' ' + entry.edition}
          </h2>
          <div className='d-flex justify-content-center'>
            <img
              src={entry.mainImage}
              alt='Competition header image'
              className='col-10 col-md-7 m-3 align-self-center'
            />
          </div>

          {loadScores(entry)}
          <div className=' border-bottom border-4 border-primary w-50 mx-5'>
            <h3 className='text-primary display-5 my-4 fw-bold'>
              ¿En qué consistió?
            </h3>
          </div>
          <div className='row justify-content-center m-0 m-lg-5'>
            {loadDescriptions(entry)}
            {loadConclusion(entry)}
          </div>
          <div className='container-fluid justify-content-center my-5 bg-gray bg-opacity-25 py-1'>
            <div className=' border-bottom border-4 border-primary w-50 m-5'>
              <h3 className='text-primary display-5 fw-bold '>Galería </h3>
            </div>
            <Carousel
              indicators={false}
              controls
              variant='light'
              className='pb-4'
            >
              {loadImages(entry)}
            </Carousel>

            <Modal show={showModal} onHide={handleCloseModal} size='xl' className='align-self-center'>
              <Modal.Body className='rounded'>
                <img
                  src={currentImage}
                  alt='Expanded'
                  className='d-block w-100'
                  style={{ height: 'auto' }}
                />
              </Modal.Body>
            </Modal>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='border-bottom border-4 border-primary w-50 mx-5'>
              <h3 className='text-primary display-5 my-4 fw-bold text-center'>
                El equipo
              </h3>
            </div>
          </div>
          <div className='d-flex justify-content-center m-4'>
            <img
              src={entry.team}
              alt='Competition team image'
              className='col-10 m-4 align-self-center'
            />
          </div>
        </div>
      )
    })
    return tabs
  }

  const loadScores = entry => {
    const data = []
    entry.scores.forEach((score, index) => {
      data.push(
        <p key={'score' + index} className='text-light h2 text-center p-2'>
          {`${score.place}° lugar a nivel ${score.type}`}
        </p>
      )
    })
    return data
  }
  const loadDescriptions = entry => {
    const data = []
    entry.content.forEach((element, index) => {
      if (element.type === 'text') {
        data.push(
          <div
            className='col-10 col-lg-6 p-2 p-lg-4 align-content-center'
            key={'text' + index}
          >
            <p className='text-light lead lh-lg'>{element.value}</p>
          </div>
        )
      } else if (element.type === 'image') {
        data.push(
          <div className='col-10 col-lg-6 p-2 p-lg-4'>
            <img
              src={element.value}
              alt='Image'
              className='w-100'
              key={'img' + index}
            />
          </div>
        )
      }
    })
    return data
  }
  const loadConclusion = entry => {
    const data = []

    data.push(
      <div className='col-10 col-lg-12 p-4 align-content-center'>
        <p className='text-light lead lh-lg'>{entry.conclusion}</p>
      </div>
    )

    data.push(
      <div className='col-10 col-lg-8 p-4'>
        <img src={entry.conclusionImage} alt='Image' className='w-100' />
      </div>
    )

    return data
  }
  const loadImages = entry => {
    const carouselRows = []
    const total = entry.images.length
    for (let i = 0; i < total; i += chunkSize) {
      const chunk = entry.images.slice(i, i + chunkSize)
      carouselRows.push(
        <Carousel.Item key={i}>
          <div className='row justify-content-around py-3 px-5'>
            {chunk.map(item => (
              <div className={`col-${size} justify-content-center d-flex`} key={item}>
                <img
                  src={item}
                  alt=''
                  className='d-block'
                  style={{ height: '200px', cursor: 'pointer' }}
                  onClick={() => handleImageClick(item)}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      )
    }
    return carouselRows
  }

  return (
    <div className='container-xxl pt-5 mt-5'>
      <ul className='nav nav-tabs nav-justified' id='myTab' role='tablist'>
        {loadTabTitles()}
      </ul>
      <div className='tab-content' id='myTabContent'>
        {loadTabContent()}
      </div>
    </div>
  )
}

export default Tabs
