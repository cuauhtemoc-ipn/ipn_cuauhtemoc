import React, { useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '@/assets/horizontal_logo.svg'

const Header = () => {
  const navbarCollapseRef = useRef(null)
  const navbarToggleRef = useRef(null)
  const location = useLocation()

  // Efecto para colapsar el menú al cambiar de ruta
  useEffect(() => {
    if (navbarCollapseRef.current.classList.contains('show')) {
      navbarCollapseRef.current.classList.remove('show')
    }
  }, [location])

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el clic no fue dentro del navbar ni del toggle button, se colapsa
      if (
        navbarCollapseRef.current &&
        !navbarCollapseRef.current.contains(event.target) &&
        !navbarToggleRef.current.contains(event.target)
      ) {
        if (navbarCollapseRef.current.classList.contains('show')) {
          navbarCollapseRef.current.classList.remove('show')
        }
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const linkIsActive = isActive => {
    return isActive
      ? 'text-decoration-none text-light border-bottom border-light border-2 p-1'
      : 'text-decoration-none text-gray'
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-1 px-5 container-fluid d-flex justify-content-between align-items-center content fixed-top'>
      <NavLink to='/' className='my-2 col-8 col-sm-7 col-lg-3'>
        <img src={logo} alt='IPN Cuauhtemoc Logo' className='w-100' />
      </NavLink>

      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#main-nav'
        aria-controls='main-nav'
        aria-expanded='false'
        aria-label='Toggle navigation'
        ref={navbarToggleRef}
      >
        <span className='navbar-toggler-icon navbar-toggler-icon-bg-primary navbar-toggler-border-color-light' />
      </button>

      <div
        className='collapse navbar-collapse justify-content-end align-center w-auto'
        id='main-nav'
        ref={navbarCollapseRef}
      >
        <ul className='list-inline d-md-flex m-0'>
          <li className='nav-item m-4'>
            <NavLink
              to='/'
              className={({ isActive }) => linkIsActive(isActive)}
            >
              Inicio
            </NavLink>
          </li>
          <li className='nav-item m-4'>
            <NavLink
              to='/aboutUs'
              className={({ isActive }) => linkIsActive(isActive)}
            >
              Acerca de
            </NavLink>
          </li>

          <li className='nav-item dropdown m-4'>
            <a
              className='nav-link dropdown-toggle text-decoration-none text-gray'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Proyectos
            </a>
            <ul className='dropdown-menu dropdown-menu-dark'>
              <li>
                <NavLink
                  className='dropdown-item'
                  to='/projects/cansat_competition'
                >
                  CanSat Competition
                </NavLink>
              </li>
              <li>
                <NavLink className='dropdown-item' to='/projects/cansat_cucei'>
                  CanSat CUCEI
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='dropdown-item'
                  to='/projects/picosatelites_puebla'
                >
                  Picosatélites Puebla
                </NavLink>
              </li>
              <li>
                <NavLink className='dropdown-item' to='/projects/enmice'>
                  ENMICE
                </NavLink>
              </li>
            </ul>
          </li>

          <li className='nav-item dropdown m-4'>
            <a
              className='nav-link dropdown-toggle text-decoration-none text-gray'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Involúcrate
            </a>
            <ul className='dropdown-menu dropdown-menu-dark'>
              <li>
                <NavLink className='dropdown-item' to='/sponsors'>
                  Patrocinadores
                </NavLink>
              </li>
              <li>
                <NavLink className='dropdown-item' to='/joinUs'>
                  Reclutamiento
                </NavLink>
              </li>
            </ul>
          </li>

          <li className='m-4'>
            <NavLink
              to='/contact'
              className={({ isActive }) => linkIsActive(isActive)}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
