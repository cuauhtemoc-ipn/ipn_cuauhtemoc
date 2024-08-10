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

  const handleImageClick = image => {
    setCurrentImage(image)
    setShowModal(true)
  }

  const handleCloseModal = () => setShowModal(false)

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
      setDuration(totalWidth ? totalWidth / 2 / 250 : 0)
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
        `}
      </style>
      <div
        className='carousel-track'
        id={`Track-${name}`}
        ref={reference}
        style={{
          animationName: `slide-${name}`,
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: isHovered || isModalOpen ? 'paused' : 'running' // Pause on hover or if modal is open
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
  )
}
