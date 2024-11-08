/* eslint-disable react/prop-types */
import React from 'react'

export default function CarouselItem ({ imgUrl, imgTitle, utility }) {
  const ImportDrivePhoto = (driveUrl, height) => {
    // Default URL in case no valid file ID is found
    const defaultUrl =
      'https://drive.google.com/file/d/1L9fQID39u0UmcYW_3Mvf-6pucN0JcqVm/view?usp=drive_link'

    // Try to extract the file ID from the Google Drive URL
    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    // Construct the new URL with the specified height
    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  return (
    <div className='carousel-card'>
      <img
        src={ImportDrivePhoto(imgUrl, 200)}
        alt={imgTitle}
        className='d-block'
        style={{ height: '200px', cursor: 'pointer', marginInline: '10px' }}
        onClick={() => utility(imgUrl)}
      />
    </div>
  )
}
