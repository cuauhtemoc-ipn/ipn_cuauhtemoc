/* eslint-disable react/prop-types */
import React from 'react'

export default function CarouselItem ({ imgUrl, imgTitle, utility }) {
  return (
    <div className='carousel-card'>
      <img
        src={imgUrl}
        alt={imgTitle}
        className='d-block'
        style={{ height: '200px', cursor: 'pointer' }}
        onClick={() => utility(imgUrl)}
      />
    </div>
  )
}
