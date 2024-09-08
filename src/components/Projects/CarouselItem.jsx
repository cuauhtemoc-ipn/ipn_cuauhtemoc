/* eslint-disable react/prop-types */
import React from 'react'

export default function CarouselItem ({ imgUrl, imgTitle, utility }) {
  const updateUrl = (url, height) => {
    const newHeight = height

    // Extract the width (w) and height (h) parameters from the URL using stricter regular expressions
    const widthMatch = url.match(/w(\d+)(?=-h\d+)/) // Look for "w" followed by digits and "-h"
    const heightMatch = url.match(/h(\d+)(?=-s)/) // Look for "h" followed by digits and "-s"

    if (widthMatch && heightMatch) {
      const currentWidth = parseInt(widthMatch[1], 10)
      const currentHeight = parseInt(heightMatch[1], 10)

      // Calculate the proportional new width
      const newWidth = Math.round((currentWidth / currentHeight) * newHeight)

      // Replace the old width and height with the new values, keeping boundaries intact
      const updatedUrl = url
        .replace(/w\d+(?=-h\d+)/, `w${newWidth}`)
        .replace(/h\d+(?=-s)/, `h${newHeight}`)

      return updatedUrl
    }

    // Return the original URL if no width/height parameters are found
    return url
  }

  return (
    <div className='carousel-card'>
      <img
        src={updateUrl(imgUrl, 200)}
        alt={imgTitle}
        className='d-block'
        style={{ height: '200px', cursor: 'pointer', marginInline: '10px' }}
        onClick={() => utility(imgUrl)}
      />
    </div>
  )
}
