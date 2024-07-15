import React from 'react'
import logo1 from '@/assets/main_logo.svg'
import name from '@/assets/team_name.svg'

const Footer = () => {
  return (
    <div className='container-fluid p-5 mt-4 bg-dark'>
      <footer className='row justify-content-start align-items-center'>
        <div className='col-md-4 px-4'>
          <div>
            <img
              src={logo1}
              className='img-fluid mx-auto d-block'
              alt='IPN Cuauhtemoc image'
            />
          </div>
          <div>
            <img
              src={name}
              className='img-fluid mx-auto d-block'
              alt='IPN Cuauhtemoc'
            />
          </div>
        </div>
        <div className='col-md-4 px-5'>
          <div className='text-light'>
            <h2>Menú rápido</h2>
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>proyectos</li>
            <li>
              Involúcrate
              <ul>
                <li>Dona</li>
                <li>Cursos</li>
                <li>Patrocinadores</li>
                <li>Reclutamiento</li>
              </ul>
            </li>
            <li>Contacto</li>
          </div>
          <div className='text-light mt-4 text-center'>
            <p>2024 IPN Cuauhtémoc Aerospace</p>
          </div>
          <div>
            <img />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
