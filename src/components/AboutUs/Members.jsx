import React from 'react'
import memb from '@/assets/memb.svg'

const Members = () => {
  return (
    <div className='container-xxl bg-dark bg-opacity-75 px-0 py-5'>
      <div className='row justify-content-center mx-0'>
        <h1 className='text-center text-warning border-bottom border-4 border-warning mb-4 col-3'>
          Integrantes
        </h1>
        <div className='row justify-content-around'>
          <div className='card d-flex justify-content-center bg-light bg-opacity-25 text-light my-5 col-5'>
            <div className='row no-gutters'>
              <div className='col-md-5 p-0'>
                <img src={memb} className='card-img' alt='...' />
              </div>
              <div className='col-md-7'>
                <div className='card-body'>
                  <h4 className='card-title'>Nombre del integrante</h4>
                  <h5 className='card-text'>Subsección</h5>
                  <p className='card-text'>
                    <small>
                      Pequeña descripción sobre su papel en la subsección y/o en
                      el equipo
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='card d-flex justify-content-center bg-light bg-opacity-25 text-light my-5 col-5'>
            <div className='row no-gutters'>
              <div className='col-md-5 p-0'>
                <img src={memb} className='card-img' alt='...' />
              </div>
              <div className='col-md-7'>
                <div className='card-body'>
                  <h4 className='card-title'>Nombre del integrante</h4>
                  <h5 className='card-text'>Subsección</h5>
                  <p className='card-text'>
                    <small>
                      Pequeña descripción sobre su papel en la subsección y/o en
                      el equipo
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='card d-flex justify-content-center bg-light bg-opacity-25 text-light my-5 col-5'>
            <div className='row no-gutters'>
              <div className='col-md-5 p-0'>
                <img src={memb} className='card-img' alt='...' />
              </div>
              <div className='col-md-7'>
                <div className='card-body'>
                  <h4 className='card-title'>Nombre del integrante</h4>
                  <h5 className='card-text'>Subsección</h5>
                  <p className='card-text'>
                    <small>
                      Pequeña descripción sobre su papel en la subsección y/o en
                      el equipo
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='card d-flex justify-content-center bg-light bg-opacity-25 text-light my-5 col-5'>
            <div className='row no-gutters'>
              <div className='col-md-5 p-0'>
                <img src={memb} className='card-img' alt='...' />
              </div>
              <div className='col-md-7'>
                <div className='card-body'>
                  <h4 className='card-title'>Nombre del integrante</h4>
                  <h5 className='card-text'>Subsección</h5>
                  <p className='card-text'>
                    <small>
                      Pequeña descripción sobre su papel en la subsección y/o en
                      el equipo
                    </small>
                  </p>
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
        <div className='row my-5 justify-content-center'>
          <div className='text-light col-5'>
            <p>
              Si estás interesado en unirte a nosotros por favor da click en el
              siguiente enlace a fin de que puedas ser parte de este equipo.
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
