import React from 'react'
import { NavLink } from 'react-router-dom'
import arrowup from '@/assets/arrow-up-circle-fill.svg'

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
        <img src={arrowup} className='col-6 col-md-7 col-lg-6 col-xl-4' alt='Ir a arriba' />
      </NavLink>
      <p className='text-center'>Ir a arriba</p>
    </div>
  )
}

export default ScrollTopButton
