import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='row text-light px-0 col-12'>
      <NavLink className='text-center' onClick={scrollToTop}>
        {/*col-6 col-md-7 col-lg-6 col-xl-4*/}
        <i
          className='bi bi-arrow-up-circle col-6 col-md-7 col-lg-6 col-xl-4 h1'
          alt='Ir a arriba'
          style={{ color: 'white' }}
        />
      </NavLink>
      <p className='text-center'>Ir a arriba</p>
    </div>
  )
}

export default ScrollTopButton
