import React from 'react'
import logo1 from '@/assets/main_logo.svg'
import name from '@/assets/team_name.svg'
import arrow from '@/assets/arrow.svg'

const Descrpt = () => {
  return (
    <div className='container-fluid row mx-0 my-5 d-flex justify-content-center align-items-center h-full'>
      <div className='mx-4 col-lg-5 col-md-6 col-s-12 col-xs-12'>
        <img src={logo1} className='img-fluid mx-auto d-block' alt='IPN Cuauhtemoc image' />
      </div>
      <div className='text text-light col-12 col-md-9 col-lg-4'>
        <h3>Somos</h3>
        <img src={name} className='img-fluid' alt='IPN Cuauhtemoc' />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div className='text-center'>
          <button className='btn bg-gray text-dark py-1'>
            Saber más
            <img
              src={arrow}
              className='img-fluid mx-auto ps-2'
              alt='arrow'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Descrpt
