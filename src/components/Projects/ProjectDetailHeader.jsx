/* eslint-disable react/prop-types */
import React from 'react'

const ProjectDetailHeader = ({ image, name, text, url }) => {
  function btnClick () {
    window.open(url)
  }
  return (
    <div className='container-xxl d-flex pt-5 mt-5 mb-5'>
      <div className='row mx-0 justify-content-center align-items-center'>
        <div className='text-center col-12 col-md-6 col-lg-5 my-5 my-lg-0 '>
          <img src={image} className='img-fluid' alt='Competition banner' />
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
