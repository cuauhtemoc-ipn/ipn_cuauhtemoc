/* eslint-disable react/prop-types */
import React from 'react'

const ProjectCard = ({ data }) => {
  return (
    <div className='card-container'>
      <div className='card-info'>
        <div className='card-img-container'>
          <img src={data.src} />
        </div>
        <div className='text-light card-txt'>
          <h4 className='font-weight-bold h4 text-center'>{data.title}</h4>
          <p>
            {data.text.length > 255
              ? data.text.slice(0, 255) + '...'
              : data.text}
          </p>
        </div>
        <a
          href='#'
          className='text-warning font-weight-bold position-absolute h5 text-decoration-none'
        >
          Vew más...
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
