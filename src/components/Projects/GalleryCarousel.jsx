/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useState, useRef } from 'react'
import CarouselItem from './CarouselItem'

export default function AutoplayCarousel ({ images, utility, activeTab }) {
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    if (trackRef.current) {
      const totalWidth = Array.from(trackRef.current.children).reduce(
        (acc, child) => {
          const childWidth = child.offsetWidth
          // console.log(`Child width: ${childWidth}`) // Debugging log
          return acc + childWidth
        },
        0
      )
      console.log(`${1} - Total carousel width: ${totalWidth}`) // Debugging log
      setCarouselWidth(totalWidth - trackRef.current.offsetWidth)
      setDuration(
        totalWidth - trackRef.current.offsetWidth
          ? ((totalWidth - trackRef.current.offsetWidth) / 100) * 1
          : 0
      )
    }
  }, [images, activeTab])

  return (
    <div className='carousel-container'>
      <style>
        {`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${carouselWidth}px); }
            }
            carousel-container:hover {
              animation-play-state: paused;
            }
        `}
        \
      </style>
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
