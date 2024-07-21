/* eslint-disable react/prop-types */
import React from 'react'

const ProjectCard = ({ data }) => {
  return (
    <div className='mx-auto mx-lg-0 my-4 px-3 col-10 col-md-6 col-lg-6 col-xl-6 mb-4'>
      <div className='card border-0'>
        <div className='ratio ratio-4x3'>
          <img
            src={data.src}
            className='object-fit-cover'
            alt='IPN Cuauhtemoc image'
          />
        </div>
        <div className='card-body bg-light text-dark ratio ratio-4x3'>
          <div className='d-flex flex-column h-100'>
            <div className='p-3 overflow-auto flex-grow-1'>
              <h4 className='card-title'>{data.title}</h4>
              <p>
                {data.text.length > 255
                  ? data.text.slice(0, 255) + '...'
                  : data.text}
              </p>
            </div>
            <div className='text-center my-3 my-sm-5 my-md-3 my-lg-2'>
              <button className='btn btn-lg bg-dark text-light mt-auto'>
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
