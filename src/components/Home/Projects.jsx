import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import team from '@/assets/team.svg'
import cucei from '@/assets/teamcucei.png'
import mat from '@/assets/material.svg'

const image = (
  <div className='my-lg-4 col-md-10 col-lg-5 col-xl-5 align-items-center'>
    <img
      src={mat}
      className='img-fluid col-md-12'
      alt='Imagen de muesta de componentes'
    />
  </div>
)

const cardcontent = (
  <div className='row col-lg-12 col-xl-12 mt-4 justify-content-center'>
    <ProjectCard
      data={{
        src: team,
        title: 'CanSat Competition',
        text: 'Descubre cómo se realiza a cabo la competencia internacional CanSat Competition donde hemos logramos posicionarmos como el mejor equipo de Latinoamérica y poner en alto el nombre de México así como de nuestra institución'
      }}
    />
    <ProjectCard
      data={{
        src: cucei,
        title: 'CanSat CUCEI',
        text: 'Acompáñanos a visualizar las veces que hemos participado en la competencia nacional CanSat CUCEI en la cual nos hemos posicionado dentro de los mejores lugares siendo capaces de obtener el primer lugar gracias a nuestro esfuerzo y dedicación'
      }}
    />
    <ProjectCard
      data={{
        src: cucei,
        title: 'CanSat CUCEI',
        text: 'Acompáñanos a visualizar las veces que hemos participado en la competencia nacional CanSat CUCEI en la cual nos hemos posicionado dentro de los mejores lugares siendo capaces de obtener el primer lugar gracias a nuestro esfuerzo y dedicación'
      }}
    />
    <ProjectCard
      data={{
        src: cucei,
        title: 'CanSat CUCEI',
        text: 'Acompáñanos a visualizar las veces que hemos participado en la competencia nacional CanSat CUCEI en la cual nos hemos posicionado dentro de los mejores lugares siendo capaces de obtener el primer lugar gracias a nuestro esfuerzo y dedicación'
      }}
    />
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
    <div className='container-xxl py-4 m-auto'>
      <h2 className='display-3 text-light fw-semibold my-5'>Proyectos</h2>
      <div className='row mx-0 justify-content-center'>
        {isLargeScreen ?<>{cardcontent}</> 
        : <>{cardcontent}</>}
      </div>
    </div>
  )
}

export default Proyect
