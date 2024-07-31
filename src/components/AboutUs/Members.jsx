import React from 'react'
import memb from '@/assets/memb.svg'

const membcard = (
  <div className='d-flex justify-content-center align-items-center my-4 col-6'>
    <div className='card align-items-center bg-light bg-opacity-25 text-light col-10'>
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
)

const Members = () => {
  return (
    <div className='container-xxl bg-dark bg-opacity-75 px-0 py-5'>
      <div className='row justify-content-center mx-0'>
        <h1 className='text-center text-warning border-bottom border-4 border-warning mb-4 col-3'>
          Integrantes
        </h1>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item bg-dark'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                Líderes del equipo
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <div className='row justify-content-center align-items-center'>
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item bg-dark'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Aerodinámica
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <div className='row justify-content-around'>
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item bg-dark'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                CDH
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <div className='row justify-content-around'>
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item bg-dark'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                EPS
              </button>
            </h2>
            <div
              id='collapseFour'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <div className='row justify-content-around'>
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item bg-dark'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                Mecánica
              </button>
            </h2>
            <div
              id='collapseFive'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <div className='row justify-content-around'>
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                  {membcard}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center mx-0'>
        <h1 className='text-center text-warning border-bottom border-4 border-warning mb-4 col-3'>
          Reclutamiento
        </h1>
        <div className='row justify-content-center align-items-center mx-0 my-5'>
          <div className='d-flex text-light col-5'>
            <p className='mb-0'>
              Si estás interesado en formar parte de nuestro equipo ¡te
              invitamos a dar click en el siguiente enlace a fin de poder
              trabajar de cerca con la tecnología aeroespacial!. Queremos que
              seas parte de un ambiente colbaorativo donde se toman en cuenta
              las ganas de aprender así como la actitud con vistas al
              aprendizaje. ¡Únete a nosotros para ser pionero en el secotr de la
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
