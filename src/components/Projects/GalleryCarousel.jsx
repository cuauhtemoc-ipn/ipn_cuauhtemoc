/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import CarouselItem from './CarouselItem'

export default function AutoplayCarousel ({
  images,
  activeTab,
  name,
  reference,
  isModalOpen // Add this prop to track if the modal is open
}) {
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isHovered, setIsHovered] = useState(false) // Track hover state
  const [showModal, setShowModal] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [isExpanded, setIsExpanded] = useState(false) // Track if the collapsible section is expanded

  const handleImageClick = image => {
    setCurrentImage(image)
    setShowModal(true)
  }

  const ImportDrivePhoto = (driveUrl) => {
    // Default URL in case no valid file ID is found
    const defaultUrl =
      'https://drive.google.com/file/d/1L9fQID39u0UmcYW_3Mvf-6pucN0JcqVm/view?usp=drive_link'

    // Try to extract the file ID from the Google Drive URL
    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    // Construct the new URL with the specified height
    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}`

    return newUrl
  }

  const handleCloseModal = () => setShowModal(false)

  const toggleExpanded = () => {
    setIsExpanded(prevState => !prevState)
  }

  useEffect(() => {
    if (reference.current && name === activeTab) {
      const totalWidth = Array.from(reference.current.children).reduce(
        (acc, child) => {
          const childWidth = child.offsetWidth
          return acc + childWidth
        },
        0
      )
      setCarouselWidth(totalWidth / 2)
      setDuration(totalWidth ? totalWidth / 2 / 125 : 0)
      setIsExpanded(false)
    }
  }, [images, activeTab, reference, name])

  // Handlers for hover state
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className='carousel-container'>
      <style>
        {`
          @keyframes slide-${name} {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${carouselWidth}px); }
          }

          .carousel-track {
            transition: transform 4s ease-out; /* Smoothly stop the carousel */
          }

          .carousel-track.paused {
            transform: transl ateX(-${carouselWidth}px); /* Keep it in place */
          }

          .carousel-card img {
            transition: transform 0.5s ease; /* Smooth transition over 0.5 seconds */
          }

          .carousel-card:hover img {
            transform: scale(1.1); /* Zoom the hovered image */
          }
        `}
      </style>
      <div
        className={`collapse ${!isExpanded ? 'show' : ''}`}
        id='collapseExample'
      >
        <div
          className={`carousel-track ${isHovered ? 'paused' : ''}`}
          id={`Track-${name}`}
          ref={reference}
          style={{
            animationName: `slide-${name}`,
            animationDuration: `${duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationPlayState: isHovered || showModal ? 'paused' : 'running' // Pause on hover or if modal is open
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Object.keys(images).map(detailKey => (
            <CarouselItem
              imgUrl={images[detailKey]}
              imgTitle='CanSat image'
              key={detailKey + 's - ' + name}
              utility={handleImageClick}
            />
          ))}
          {Object.keys(images).map(detailKey => (
            <CarouselItem
              imgUrl={images[detailKey]}
              imgTitle='CanSat image'
              key={detailKey + 'e - ' + name}
              utility={handleImageClick}
            />
          ))}
        </div>

        <p className='d-flex justify-content-center m-3'>
          <a
            className='btn btn-outline-light'
            data-bs-toggle='collapse'
            href='#collapseExample'
            role='button'
            aria-expanded={isExpanded}
            aria-controls='collapseExample'
            onClick={toggleExpanded} // Toggle the expanded state on click
          >
            {isExpanded ? 'Ver menos' : 'Ver todo'}
          </a>
        </p>
      </div>
      <div
        className={`collapse ${isExpanded ? 'show' : ''}`}
        id='collapseExample'
      >
        <div className='container-fluid d-flex flex-wrap gap-3 justify-content-around'>
          {Object.keys(images).map(detailKey => (
            <CarouselItem
              imgUrl={images[detailKey]}
              imgTitle='CanSat image'
              key={detailKey + 's - ' + name}
              utility={handleImageClick}
            />
          ))}
        </div>

        <p className='d-flex justify-content-center m-3'>
          <a
            className='btn btn-outline-light'
            data-bs-toggle='collapse'
            href='#collapseExample'
            role='button'
            aria-expanded={isExpanded}
            aria-controls='collapseExample'
            onClick={toggleExpanded} // Toggle the expanded state on click
          >
            {isExpanded ? 'Ver menos' : 'Ver todo'}
          </a>
        </p>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size='xl'
        className='align-self-center'
      >
        <Modal.Body className='rounded'>
          <img
            src={ImportDrivePhoto(currentImage)}
            alt='Expanded'
            className='d-block w-100'
            style={{ height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}
