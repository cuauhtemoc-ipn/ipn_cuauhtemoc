import React from 'react'
import { NavLink } from 'react-router-dom'
import SpDescrpt from './SponsDescrpt'

const Sponsor = () => {
  return (
    <div className='container-lg py-4 h-full'>
      <h2 className='display-3 text-light fw-semibold my-5'>Patrocinadores</h2>
      <SpDescrpt />
      <div className='text-center justify-content-center my-4'>
        <NavLink to='/sponsors'>
          <button className='btn btn-outline-light btn-lg px-5'>
            Ver más ➔
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Sponsor
