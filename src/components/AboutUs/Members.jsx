/* eslint-disable no-new */
import React, { useState, useEffect, useRef } from 'react'
import { Collapse } from 'bootstrap'
import { NavLink } from 'react-router-dom'
import info from '@/assets/Members/info.json'

const Members = () => {
  const membcard = (member, index) => {
    const ImportDrivePhoto = (driveUrl, height) => {
      // Default URL in case no valid file ID is found
      const defaultUrl =
        'https://drive.google.com/file/d/1T95gfXdE9277ryMRxtHg9pkBLUDVRcNG/view?usp=drive_link'

      // Try to extract the file ID from the Google Drive URL
      const match = driveUrl.match(/\/d\/(.*)\//)
      const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

      // Construct the new URL with the specified height
      const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

      return newUrl
    }

    return (
      <div
        key={index}
        className='d-flex justify-content-center align-items-center my-4 col-11 col-sm-10 col-md-9 col-lg-6'
      >
        <div className='row justify-content-center align-items-center text-light border border-2 rounded mx-0 col-10 col-sm-12 col-lg-11 col-xl-10'>
          <div className='col-10 col-sm-5 col-md-4 col-lg-5 px-0 mx-0 m-4 m-sm-0'>
            <div className='ratio ratio-1x1'>
              <img
                src={ImportDrivePhoto(
                  member.content.find(item => item.type === 'image').value,
                  300
                )}
                className='card-img object-fit-cover rounded'
                alt={member.name}
              />
            </div>
          </div>
          <div className='d-flex flex-column justify-items-center mx-auto col-12 col-sm-7'>
            <h5>{member.name}</h5>
            <h5>{member.section}</h5>
            <div className='text-light ratio custom-ratio ratio-md-21x9 ratio-lg-16x9 overflow-auto mb-2'>
              <p className='text-justify pe-2'>
                {member.content.find(item => item.type === 'text').value}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const collapseElement = useRef(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)

    if (collapseElement.current) {
      if (isCollapsed) {
        new Collapse(collapseElement.current).show()
      } else {
        new Collapse(collapseElement.current).hide()
      }
    }
  }

  useEffect(() => {
    if (collapseElement.current) {
      new Collapse(collapseElement.current, {
        toggle: false
      })
    }
  }, [])

  return (
    <div className='container-lg bg-dark bg-opacity-75 px-0 py-4'>
      <div className='row justify-content-center mx-0'>
        <div className='justify-content-center border-bottom border-4 border-primary mx-auto col-7 col-sm-5 col-md-4 col-xl-3'>
          <h3 className='text-center text-primary display-5 fw-bold'>
            Conoce al equipo
          </h3>
        </div>
        <h2 className='display-5 text-light fw-semibold my-5'>Integrantes</h2>
        <div className='row justify-content-center align-items-center px-0 mx-0'>
          {info.data
            .slice(0, 6)
            .map((member, index) => membcard(member, index))}
        </div>
        {!isCollapsed && (
          <div className='text-center mt-3'>
            <button
              className='btn btn-outline-light'
              type='button'
              onClick={toggleCollapse}
              aria-expanded={isCollapsed}
              aria-controls='collapseExample'
            >
              Ver más integrantes
            </button>
          </div>
        )}
        <div className='collapse' id='collapseExample' ref={collapseElement}>
          <div className='row justify-content-center align-items-center bg-transparent'>
            {info.data.slice(6).map((member, index) => membcard(member, index))}
          </div>
          {isCollapsed && (
            <div className='text-center mt-3'>
              <button
                className='btn btn-outline-light'
                type='button'
                onClick={toggleCollapse}
                aria-expanded={isCollapsed}
              >
                Ver menos integrantes
              </button>
            </div>
          )}
        </div>
        <h2 className='display-5 text-light fw-semibold my-5'>Faculty advisor</h2>
        <div className='row justify-content-center mx-0'>
          <img className='col-4 border border-2 rounded-4 px-0 mb-4' src='https://lh3.googleusercontent.com/pw/AP1GczPzz3VO1nR58lZMOZtjdsH0k5G5MOnLfteME22eMvNVuC9mKFAI0iVM5I9rn4hY8RxWgNMUk7uGYl-gL7J2fjoTQEjZMj3tJiZMALz0mHo3g7V1ZcvfTQePyU6WJGtsTD140jqJI5AtrglrqWcWrlXq=w938-h938-s-no?authuser=0' alt='Masctot Pico' />
        </div>
        <p className='lead-lg text-justify text-light col-10'>El profesor Héctor Díaz es el encargado del laboratorio de aeroespacial de la ESIME Ticomán así como quien nos ha permitido realizar la construcción de nuestros diferentes proyectos dentro de sus instalaciones, otorgando su asesoría y conocimiento.</p>
        <h2 className='display-5 text-light fw-semibold my-5'>Nuestro laboratorio</h2>
        <div className='row justify-content-center mx-0'>
          <p className='lead-lg text-justify text-light col-10'>Este es nuestro laboratorio y sus diferentes áreas</p>
        </div>
      </div>
      <div className='row justify-content-center mx-0'>
        <div className='justify-content-center border-bottom border-4 border-primary mx-auto my-5 col-8 col-sm-6 col-md-5 col-xl-4'>
          <h3 className='text-center text-primary display-5 fw-bold'>
            Reclutamiento
          </h3>
        </div>
        <div className='row justify-content-center align-items-center mx-0'>
          <div className='d-flex text-light mb-4 mb-lg-0 col-11 col-sm-10 col-lg-5'>
            <p className='lead-lg text-justify'>
              Si estás interesado en formar parte de nuestro equipo ¡te
              invitamos a dar click en el siguiente enlace a fin de poder
              trabajar de cerca con la tecnología aeroespacial!. Queremos que
              seas parte de un ambiente colaborativo donde se toman en cuenta
              las ganas de aprender así como la actitud con vistas al
              aprendizaje. ¡Únete a nosotros para ser pionero en el sector de la
              ingeniería aeroespacial!
            </p>
          </div>
          <div className='text-center mb-4 mb-lg-0 col-lg-6'>
            <NavLink to='/joinUs'>
              <button className='btn btn-outline-light btn-lg px-3 px-sm-5'>
                ¡Forma parte de nuestro equipo!
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
