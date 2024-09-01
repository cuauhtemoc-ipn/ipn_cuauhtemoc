/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectCard = ({ data }) => {
  return (
    <div className='col-10 col-md-5 col-lg-3 p-3 card-container'>
      <div className='card-info'>
        <a className='card-img-container mb-3' href={data.href}>
          <img src={data.src} className='col-12' />
        </a>
        <div className='text-light text-justify'>
          <h4 className='font-weight-bold h4 text-center my-4'>{data.title}</h4>
          <p>
            {data.text.length > 255
              ? data.text.slice(0, 255) + '...'
              : data.text}
          </p>
        </div>
        <div className='col-12 d-flex justify-content-center'>
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
