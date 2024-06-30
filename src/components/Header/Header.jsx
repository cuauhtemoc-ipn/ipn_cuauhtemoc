import { NavLink } from 'react-router-dom'
import logo from '@/assets/horizontal_logo.svg'

const Header = () => {
  const linkIsActive = isActive => {
    return isActive
      ? 'text-decoration-none text-light border-bottom border-light border-2 p-1'
      : 'text-decoration-none text-gray'
  }

  return (
    <nav className='bg-dark py-1 px-5 container-fluid d-flex justify-content-between align-items-center'>
      <NavLink to='/' className=''>
        <img src={logo} alt='IPN Cuauhtemoc Logo' />
      </NavLink>
      <ul className='list-inline d-flex m-0'>
        <li className='m-4'>
          <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>
            Inicio
          </NavLink>
        </li>
        <li className='m-4'>
          <NavLink
            to='/aboutUs'
            className={({ isActive }) => linkIsActive(isActive)}
          >
            Acerca de
          </NavLink>
        </li>

        <li className='m-4'>
          <NavLink
            to='/projects'
            className={({ isActive }) => linkIsActive(isActive)}
          >
            Proyectos
          </NavLink>
        </li>
        <li className='m-4'>
          <NavLink
            to='/join'
            className={({ isActive }) => linkIsActive(isActive)}
          >
            Involúcrate
          </NavLink>
        </li>
        <li className='m-4'>
          <NavLink to='/contact' className={({ isActive }) => linkIsActive(isActive)}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
