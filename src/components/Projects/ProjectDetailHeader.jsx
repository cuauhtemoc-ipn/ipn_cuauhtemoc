/* eslint-disable react/prop-types */
import React from 'react'

const ProjectDetailHeader = ({ image, name, text, url }) => {
  function btnClick () {
    window.open(url)
  }
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
    <div className='container-xxl d-flex pt-5 mt-5 mb-5'>
      <div className='row mx-0 justify-content-center align-items-center'>
        <div className='text-center col-12 col-md-6 col-lg-5 my-5 my-lg-0 '>
          <img src={ImportDrivePhoto(image, 500)} className='img-fluid' alt='Competition banner' />
        </div>
        <div className='text-light col-12 col-md-9 col-lg-7'>
          <h1 className='display-2 mb-4  fw-bold'>{name}</h1>
          <p className='text-justify lead-lg lg-lg'>{text}</p>
          <div className='text-center mt-4'>
            <button
              className='btn btn-outline-light btn-lg px-5'
              onClick={btnClick}
            >
              Sitio de la competencia ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailHeader
