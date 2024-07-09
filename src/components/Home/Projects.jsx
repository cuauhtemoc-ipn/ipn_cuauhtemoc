import React, { useState, useEffect } from 'react'
import team from '@/assets/team.svg'
import arrow from '@/assets/arrow.svg'
import mat from '@/assets/material.svg'

const image = (
  <div className=' mx-0 col-md-10 col-lg-5 col-xl-6 align-items-center'>
    <img
      src={mat}
      className='img-fluid col-md-12'
      alt='Imagen de muesta de componentes'
    />
    <div className='text-center d-lg-none my-5'>
      <button className='btn bg-gray text-dark py-1'>
        Ver todos nuestros proyectos
        <img src={arrow} className='img-fluid mx-auto ps-2' alt='arrow' />
      </button>
    </div>
  </div>
)

const cardcontent = (
  <div className='row col-md-10 col-xl-6 col-lg-7'>
    <div className='mx-sm-auto mx-lg-0 col-sm-10 col-md-6 col-lg-6 col-xl-6'>
      <div className='card border-0'>
        <img
          src={team}
          className='card-img-top mx-auto d-block'
          alt='IPN Cuauhtemoc image'
        />
        <div className='card-body bg-gray'>
          <h4 className='card-title'>CanSat Competition</h4>
          <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className='text-center'>
            <button className='btn bg-dark text-light'>Ver más</button>
          </div>
        </div>
      </div>
    </div>
    <div className='mx-sm-auto mx-lg-0 col-sm-10 col-md-6 col-lg-6 col-xl-6 my-5 mt-md-0'>
      <div className='card border-0'>
        <img
          src={team}
          className='card-img-top mx-auto d-block'
          alt='IPN Cuauhtemoc image'
        />
        <div className='card-body bg-gray'>
          <h4 className='card-title'>CanSat Competition</h4>
          <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className='text-center'>
            <button className='btn bg-dark text-light'>Ver más</button>
          </div>
        </div>
      </div>
    </div>
    <div className='text-center d-none d-lg-inline'>
      <button className='btn bg-gray text-dark py-1'>
        Ver todos nuestros proyectos
        <img src={arrow} className='img-fluid mx-auto ps-2' alt='arrow' />
      </button>
    </div>
  </div>
)

const Proyect = () => {
  const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 992)

  useEffect(() => {
    // Function to detect screem size
    const handleResize = () => {
      setLargeScreen(window.innerWidth >= 992) // 992px is the breakpoint for 'lg' in Bootstrap
    }
    // Añadir listener para detectar cambios en el tamaño de pantalla
    window.addEventListener('resize', handleResize)

    // Llamar handleResize al inicio para establecer el estado inicial
    handleResize()

    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    /*
    <div className='container-fluid row mx-0 my-5 d-flex justify-content-end'>
      <h1 className='text-light px-5'>Proyectos</h1>
      <div className='card border-0 mx-5 col-xl-3 col-lg-4 col-md-4 col-10 px-0'>
        <img
          src={team}
          className='card-img-top mx-auto d-block'
          alt='IPN Cuauhtemoc image'
        />
        <div className='card-body bg-gray'>
          <h4 className='card-title'>CanSat Competition</h4>
          <p className='card-text'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className='text-center'>
            <button className='btn bg-dark text-light'>Ver más</button>
          </div>
        </div>
      </div>
      <div className='card border-0 mx-5 col-xl-3 col-lg-4 col-md-4 col-10 px-0'>
        <img
          src={team}
          className='card-img-top mx-auto d-block'
          alt='IPN Cuauhtemoc image'
        />
        <div className='card-body bg-gray'>
          <h4 className='card-title'>CanSat Competition</h4>
          <p className='card-text'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className='text-center'>
            <button className='btn bg-dark text-light'>Ver más</button>
          </div>
        </div>
      </div>
    </div>
  )
}
*/

    <div className='container-fluid my-5'>
      <div className='row mx-0 justify-content-center'>
        <h1 className='text-light px-5 mb-5'>Proyectos</h1>
        {isLargeScreen ? (
          <>
            {image}
            {cardcontent}
          </>
        ) : (
          <>
            {cardcontent}
            {image}
          </>
        )}
      </div>
    </div>
  )
}

export default Proyect
