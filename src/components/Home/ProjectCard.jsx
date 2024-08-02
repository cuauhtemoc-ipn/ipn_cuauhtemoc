/* eslint-disable react/prop-types */
import React from 'react'

const ProjectCard = ({ data }) => {
  return (
    <div className='card-container position-relative'>
      {/* <div className='card-img' style={{backgroundImage: `url(${data.src})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div> */}
      <img src={data.src} className='card-img' alt="" />
      <div className='card-info mt-2 text-light overflow-auto'>
          <h4 className='font-weight-bold h4'>{data.title}</h4>
          <p>
            {data.text.length > 255
              ? data.text.slice(0, 255) + '...'
              : data.text}
          </p>
          <div className='text-light card-txt card-info-hg'>
            {data.tags}
          </div>
      </div>
      <a href="#" className='text-white font-weight-bold position-absolute h5 text-decoration-none'>Vew más...</a>
    </div>
  )
}

export default ProjectCard
