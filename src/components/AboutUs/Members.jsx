import React, { useState, useEffect, useRef } from 'react'
import { Collapse } from 'bootstrap'
import memb from '@/assets/memb.svg'
import sec from '@/assets/sec.svg'
import sub1 from '@/assets/sub1.jpg'
import sub2 from '@/assets/sub2.jpg'
import sub3 from '@/assets/sub3.jpg'
import sub4 from '@/assets/sub4.jpg'
import sub5 from '@/assets/sub5.jpg'

const membcard = (
  <div className='row mx-0'>
    <div className='d-none d-md-flex justify-content-center align-items-center my-4 col-6'>
      <div className='card align-items-center bg-light bg-opacity-50 text-light col-10'>
        <div className='row justify-content-center align-items-center no-gutters col-12'>
          <div className='col-5 p-0 mx-0 '>
            <img src={memb} className='card-img' alt='...' />
          </div>
          <div className='col-md-7'>
            <div className='card-body'>
              <h4 className='card-title'>Nombre del integrante</h4>
              <h5 className='card-text'>Subsección</h5>
              <p className='card-text'>
                <small>
                  Pequeña descripción sobre su papel en la subsección y/o en el
                  equipo
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='row d-flex d-md-none justify-content-center mx-0 mb-5'>
      <div className='card bg-light bg-opacity-50 px-0 col-10'>
        <div className='ratio ratio-1x1'>
        
            <img src={memb} className='col-12' alt='...' />
          </div>
       
        <div className='ratio ratio-16x9'>
          <div className='card-body'>
            <h4 className='card-title'>Nombre del integrante</h4>
            <h5 className='card-text'>Subsección</h5>
            <p className='card-text'>
              <small>
                Pequeña descripción sobre su papel en la subsección y/o en el
                equipo
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Members = () => {
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
    <div className='container-xxl bg-dark bg-opacity-75 px-0 py-4'>
      <div className='row justify-content-center mx-0'>
        <h1 className='text-center text-gold border-bottom border-4 border-gold my-5 col-5 col-sm-4 col-md-3'>
          Integrantes
        </h1>
        <div className='row justify-content-center align-items-center px-0 mx-0'>
          {membcard}
          {membcard}
          {membcard}
          {membcard}
          {membcard}
          {membcard}
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
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
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
      </div>
      <div className='row justify-content-center mx-0'>
        <h1 className='text-center text-gold border-bottom border-4 border-gold my-5 col-3'>
          Reclutamiento
        </h1>
        <div className='row justify-content-center align-items-center mx-0 my-5'>
          <div className='d-flex text-light col-5'>
            <p className='mb-0'>
              Si estás interesado en formar parte de nuestro equipo ¡te
              invitamos a dar click en el siguiente enlace a fin de poder
              trabajar de cerca con la tecnología aeroespacial!. Queremos que
              seas parte de un ambiente colaborativo donde se toman en cuenta
              las ganas de aprender así como la actitud con vistas al
              aprendizaje. ¡Únete a nosotros para ser pionero en el sector de la
              ingeniería aeroespacial!
            </p>
          </div>
          <div className='text-center col-6'>
            <button className='btn btn-outline-light btn-lg px-5'>
              ¡Forma parte de nuestro equipo!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
