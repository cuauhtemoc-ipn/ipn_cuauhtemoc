import React from 'react'
import logo from '@/assets/main_logo.svg'

const Descrpt = () => {
  return (
    <div className='container-fluid m-0 h-100 row d-flex justify-content-center align-items-center'>
      <div className='m-4 col-md-4'>
        <img src={logo} alt='IPN Cuauhtemoc image' />
      </div>
      <div className='text ms-5 text-light col-md-6 col-xs-12'>
        <h3>Somos</h3>
        <h1>IPN CUAUHTÉMOC</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <button className='bg-gray text-dark'>Saber más</button>
      </div>
    </div>
  )
}

export default Descrpt
