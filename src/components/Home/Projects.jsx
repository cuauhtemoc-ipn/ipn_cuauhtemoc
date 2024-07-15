import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import team from '@/assets/team.svg'
import arrow from '@/assets/arrow.svg'
import mat from '@/assets/material.svg'

const image = (
  <div className='my-lg-4 col-md-10 col-lg-5 col-xl-6 align-items-center'>
    <img
      src={mat}
      className='img-fluid col-md-12'
      alt='Imagen de muesta de componentes'
    />
    <div className='text-center d-lg-none my-4'>
      <button className='btn bg-gray text-dark py-1'>
        Ver todos nuestros proyectos
        <img src={arrow} className='img-fluid mx-auto ps-2' alt='arrow' />
      </button>
    </div>
  </div>
)

const cardcontent = (
  <div className='my-4 row col-md-10 col-xl-6 col-lg-7'>
    <ProjectCard
      data={{
        src: team,
        title: 'CanSat Competition',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Turpis egestas pretium aenean pharetra magna ac placerat. Est ullamcorper eget nulla facilisi. Lectus quam id leo in vitae turpis massa sed. Mollis aliquam ut porttitor leo. Turpis egestas maecenas pharetra convallis posuere. Vitae auctor eu augue ut lectus arcu bibendum. Odio morbi quis commodo odio. Felis eget velit aliquet sagittis id consectetur. Eget egestas purus viverra accumsan. Morbi tempus iaculis urna id volutpat lacus laoreet non. Tellus elementum sagittis vitae et.'
      }}
    />
    <ProjectCard
      data={{
        src: team,
        title: 'CanSat Competition',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Turpis egestas pretium aenean pharetra magna ac placerat. Est ullamcorper eget nulla facilisi. Lectus quam id leo in vitae turpis massa sed. Mollis aliquam ut porttitor leo. Turpis egestas maecenas pharetra convallis posuere. Vitae auctor eu augue ut lectus arcu bibendum. Odio morbi quis commodo odio. Felis eget velit aliquet sagittis id consectetur. Eget egestas purus viverra accumsan. Morbi tempus iaculis urna id volutpat lacus laoreet non. Tellus elementum sagittis vitae et.'
      }}
    />
    <div className='text-center d-none d-lg-inline '>
      <button className='btn btn-outline-light btn-lg px-5'>
        Ver todos nuestros proyectos
        <img src={arrow} className='img-fluid mx-auto ps-2 pb-1' alt='arrow' />
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
    <div className='container-fluid my-4'>
      <h1 className='display-3 text-light fw-semibold px-5'>Proyectos</h1>
      <div className='row mx-0 justify-content-center'>
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
