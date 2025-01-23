import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import CarouselItem from './CarouselItem'

export default function AutoplayCarousel({
  images,
  activeTab,
  name,
  reference,
  isModalOpen
}) {
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleImageClick = (image) => {
    setCurrentImage(image)
    setShowModal(true)
  }

  const ImportDrivePhoto = (driveUrl) => {
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]
    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}`

    return newUrl
  }

  const handleCloseModal = () => setShowModal(false)

  const toggleExpanded = () => {
    setIsExpanded((prevState) => !prevState)
  }

  useEffect(() => {
    if (reference.current && name === activeTab) {
      // Wait for all images to load
      const imageLoadPromises = Object.keys(images).map((key) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.src = images[key]
          img.onload = resolve
        })
      })

      Promise.all(imageLoadPromises).then(() => {
        const totalWidth = Array.from(reference.current.children).reduce(
          (acc, child) => {
            const childStyle = window.getComputedStyle(child)
            const marginLeft = parseFloat(childStyle.marginLeft)
            const marginRight = parseFloat(childStyle.marginRight)
            return acc + child.offsetWidth + marginLeft + marginRight
          },
          0
        )
        setCarouselWidth(totalWidth / 2)
        setDuration(totalWidth ? totalWidth / 2 / 125 : 0)
        setIsExpanded(false)
      })
    }
  }, [images, activeTab, reference, name])

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
            transition: transform 4s ease-out;
          }

          .carousel-track.paused {
            transform: translateX(-${carouselWidth}px);
          }

          .carousel-card img {
            transition: transform 0.5s ease;
          }

          .carousel-card:hover img {
            transform: scale(1.1);
          }
        `}
      </style>
      <div
        className={`collapse ${!isExpanded ? 'show' : ''}`}
        id={`collapseExample-${activeTab}`}
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
            animationPlayState: isHovered || showModal ? 'paused' : 'running'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Object.keys(images).map((detailKey) => (
            <CarouselItem
              imgUrl={images[detailKey]}
              imgTitle='CanSat image'
              key={detailKey + 's - ' + name}
              utility={handleImageClick}
            />
          ))}
          {Object.keys(images).map((detailKey) => (
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
            href={`#collapseExample-${activeTab}`}
            role='button'
            aria-expanded={isExpanded}
            aria-controls={`collapseExample-${activeTab}`}
            onClick={toggleExpanded}
          >
            {isExpanded ? 'Ver menos' : 'Ver todo'}
          </a>
        </p>
      </div>
      <div
        className={`collapse ${isExpanded ? 'show' : ''}`}
        id={`collapseExample-${activeTab}`}
      >
        <div className='container-fluid d-flex flex-wrap gap-3 justify-content-around'>
          {Object.keys(images).map((detailKey) => (
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
            href={`#collapseExample-${activeTab}`}
            role='button'
            aria-expanded={isExpanded}
            aria-controls={`collapseExample-${activeTab}`}
            onClick={toggleExpanded}
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
