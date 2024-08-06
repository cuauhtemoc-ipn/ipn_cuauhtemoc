/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useState, useRef } from 'react'
import CarouselItem from './CarouselItem'

export default function AutoplayCarousel ({ images, utility, activeTab }) {
  const [carouselWidth, setCarouselWidth] = useState(0)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    if (trackRef.current) {
      const totalWidth = Array.from(trackRef.current.children).reduce(
        (acc, child) => {
          const childWidth = child.offsetWidth
          console.log(`Child width: ${childWidth}`) // Debugging log
          return acc + childWidth
        },
        0
      )
      console.log(`${activeTab} - Total carousel width: ${totalWidth}`) // Debugging log
      setCarouselWidth(totalWidth - trackRef.current.offsetWidth)
    }
  }, [images, activeTab])

  const duration = carouselWidth ? (carouselWidth / 100) * 1 : 0 // Example calculation for duration based on width

  const keyframes = `
    @keyframes slide {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${carouselWidth}px); }
    }
  `

  return (
    <div className='carousel-container'>
      <style>{keyframes}</style>
      <div
        className='carousel-track'
        ref={trackRef}
        style={{
          animation: carouselWidth
            ? `slide ${duration}s linear infinite`
            : 'none',
          ':hover': {
            'animation-play-state': 'paused'
          }
        }}
      >
        {Object.keys(images).map(detailKey => (
          <CarouselItem
            imgUrl={images[detailKey]}
            imgTitle='CanSat image'
            key={detailKey + 's'}
            utility={utility}
          />
        ))}
        {Object.keys(images).map(detailKey => (
          <CarouselItem
            imgUrl={images[detailKey]}
            imgTitle='CanSat image'
            key={detailKey + 'e'}
            utility={utility}
          />
        ))}
      </div>
    </div>
  )
}
