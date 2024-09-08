/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectCard = ({ data }) => {
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
    <div className='col-10 col-md-5 col-lg-3 p-3 card-container'>
      <div className='card-info d-flex flex-column h-100'>
        <a className='card-img-container mb-3' href={data.href}>
          <img src={updateUrl(data.src, 400)} className='col-12' />
        </a>
        <div className='text-light text-justify'>
          <h4 className='font-weight-bold h4 text-center my-4'>{data.title}</h4>
          <p>
            {data.text.length > 255
              ? data.text.slice(0, 255) + '...'
              : data.text}
          </p>
        </div>
        {/* This div will now be pushed to the bottom */}
        <div className='col-12 d-flex justify-content-center mt-auto'>
          <NavLink to={data.href}>
            <button className='btn btn-outline-light btn-lg px-5'>
              Ver más ➔
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
