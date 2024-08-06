/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import GalleryCarousel from './GalleryCarousel'

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.length - 1)
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
          <div className='row m-0 p-0 justify-content-center'>
            <div className=' border-bottom border-4 border-primary mx-5 d-flex w-50  justify-content-center'>
              <h3 className='text-primary display-5 my-2 fw-bold d-flex'>
                ¿En qué consistió?
              </h3>
            </div>
          </div>
          <div className='row justify-content-center m-0 m-lg-5'>
            {loadDescriptions(entry)}
            {loadConclusion(entry)}
          </div>
          <div className='container-fluid justify-content-center my-5 bg-dark bg-opacity-50 py-1'>
            <div className='row m-0 p-0 mb-5 justify-content-center'>
              <div className=' border-bottom border-4 border-primary mx-5 d-flex w-40  justify-content-center'>
                <h3 className='text-primary display-5 my-2 fw-bold d-flex'>
                  Galería
                </h3>
              </div>
            </div>

            <GalleryCarousel
              images={entry.images}
              utility={handleImageClick}
              index={index + 'car'}
              reference={activeTab}
            />

            <Modal
              show={showModal}
              onHide={handleCloseModal}
              size='xl'
              className='align-self-center'
            >
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
          <div className='row m-0 p-0 justify-content-center'>
            <div className=' border-bottom border-4 border-primary mx-5 d-flex w-40  justify-content-center'>
              <h3 className='text-primary display-5 my-2 fw-bold d-flex'>
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
            <p className='text-light lead lh-lg text-justify'>
              {element.value}
            </p>
          </div>
        )
      } else if (element.type === 'image') {
        data.push(
          <div className='col-10 col-lg-6 p-2 p-lg-4 align-content-center'>
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
        <p className='text-light lead lh-lg text-justify'>{entry.conclusion}</p>
      </div>
    )

    data.push(
      <div className='col-10 col-lg-8 p-4'>
        <img src={entry.conclusionImage} alt='Image' className='w-100' />
      </div>
    )

    return data
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
