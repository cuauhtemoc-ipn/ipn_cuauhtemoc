/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectCard = ({ data }) => {
  const ImportDrivePhoto = (driveUrl, height) => {
    // Default URL in case no valid file ID is found
    const defaultUrl =
      'https://drive.google.com/file/d/14Mz42fincOS8Q94stoh_ijdm2Dg1Wb_j/view?usp=drive_link'

    // Try to extract the file ID from the Google Drive URL
    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    // Construct the new URL with the specified height
    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  return (
    <div className='col-10 col-md-5 col-lg-3 px-3 mb-4 card-container'>
      <div className='card-info d-flex flex-column h-100'>
        <NavLink to={data.href} className='card-img-container mb-3'>
          <img src={ImportDrivePhoto(data.src, 300)} className='col-12' />
        </NavLink>
        <div className='text-light text-justify'>
          <h4 className='font-weight-bold h4 text-center my-4'>{data.title}</h4>
          <p className='lead-lg'>
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
