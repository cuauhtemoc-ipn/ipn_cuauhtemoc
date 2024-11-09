import React from 'react'
import logo from '@/assets/main_logo.svg'
import name from '@/assets/team_name.svg'
import { NavLink } from 'react-router-dom'
import insta from '@/assets/instalogo.png'
import linkedin from '@/assets/linkedinlogo.png'
import face from '@/assets/facebooklogo.svg'
import ScrollTopButton from '../../routes/Scrollupbtn'

const Footer = () => {
  return (
    <div className='container-fluid py-5 mt-4 bg-dark'>
      <footer className='row justify-content-center align-items-center mx-0 position-relative'>
        <div className='row justify-content-center col-7 col-md-4'>
          <div className='px-3 mb-5 mb-md-0 col-7 col-md-12'>
            <div>
              <img
                src={logo}
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
        </div>
        <div className='row justify-content-center mx-0 col-md-8'>
          <div className='px-2 mb-5 mb-md-0 text-light col-5 col-md-6'>
            <h5 className='text-center text-md-start mb-4'>Menú rápido</h5>
            <NavLink to='/' className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
              <li>Inicio</li>
            </NavLink>
            <NavLink to='/aboutUs' className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
              <li>Acerca de</li>
            </NavLink>
            <li>
              Proyectos
              <ul>
                <NavLink
                  to='/projects/cansat_competition'
                  className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
                >
                  <li>Cansat Competition</li>
                </NavLink>
                <NavLink
                  to='/projects/cansat_cucei'
                  className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
                >
                  <li>Cansat CUCEI</li>
                </NavLink>
                <NavLink
                  to='/projects/picosatelites_puebla'
                  className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
                >
                  <li>Picosatélites</li>
                </NavLink>
                <NavLink
                  to='/projects/enmice'
                  className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
                >
                  <li>ENMICE</li>
                </NavLink>
              </ul>
            </li>
            <li>
              Involúcrate
              <ul>
                {/* <NavLink
                  to='/courses'
                  className='text-decoration-none text-light'
                >
                  <li>Cursos</li>
                </NavLink> */}
                <NavLink
                  to='/sponsors'
                  className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
                >
                  <li>Patrocinadores</li>
                </NavLink>
                <NavLink
                  to='/joinUs'
                  className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
                >
                  <li>Reclutamiento</li>
                </NavLink>
              </ul>
            </li>
            <NavLink to='/contact' className='text-light link-light link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
              <li>Contacto</li>
            </NavLink>
          </div>
          <div className='text-center text-md-start text-light col-12 col-md-6'>
            <div className='row'>
              <h5 className='mb-4 col-12 col-md-9'>
                Síguenos en nuestras redes sociales
              </h5>
            </div>
            <div className='row justify-content-center align-items-center mx-0 mb-3 col-12'>
              <div className='p-0 p-lg-1 px-xl-3 col-12 col-md-2'>
                <a
                  href='https://www.instagram.com/cuauhtemocipn/'
                  target='_blank'
                >
                  <img
                    src={insta}
                    className='img-fluid mx-auto mb-2 mb-md-0 col-1 col-md-12'
                    alt='Red Social Instagram'
                  />
                </a>
              </div>
              <div className='text-md-start col-10'>
                <p className='my-auto'>cuauhtemocipn</p>
              </div>
            </div>
            <div className='row justify-content-center align-items-center mx-0 mb-3 col-12'>
              <div className='p-0 p-lg-1 px-xl-3 col-12 col-md-2'>
                <a
                  href='https://www.linkedin.com/company/cuauht%C3%A9moc-ipn-aeroespacial/'
                  target='_blank'
                >
                  <img
                    src={linkedin}
                    className='img-fluid mx-auto mb-2 mb-md-0 col-1 col-md-12'
                    alt='Red Social Linkedin'
                  />
                </a>
              </div>
              <div className='text-md-start col-10'>
                <p className='my-auto'>Cuauhtemoc IPN Aeroespacial</p>
              </div>
            </div>
            <div className='row justify-content-center align-items-center mx-0 mb-3 col-12'>
              <div className='p-0 p-lg-1 px-xl-3 col-12 col-md-2'>
                <a
                  href='https://www.facebook.com/CuauhtemocIPN'
                  target='_blank'
                >
                  <img
                    src={face}
                    className='img-fluid mx-auto mb-2 mb-md-0 col-1 col-md-12'
                    alt='Red Social Facebook'
                  />
                </a>
              </div>
              <div className='text-md-start col-10'>
                <p className='my-auto'>Cuauhtemoc IPN Aeroespacial</p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center text-center text-light px-0 mx-0 mt-4'>
            <p className='px-0 col-12 col-md-5'>
              2024 IPN Cuauhtémoc Aerospace
            </p>
            <p className='d-none d-md-inline col-1'>|</p>
            <p className='px-0 col-12 col-md-5'>
              Todos los derechos reservados
            </p>
          </div>
        </div>
        <div className='row justify-content-center justify-content-md-end position-absolute top-0 end-0 mx-0 col-4 col-sm-3 col-md-2'>
          <ScrollTopButton />
        </div>
      </footer>
    </div>
  )
}

export default Footer
