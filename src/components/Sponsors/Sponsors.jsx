import React from 'react'
import coop from '@/assets/coop.jpg'

const SponsorsDs = () => {
  return (
    <div className='container-lg d-flex flex-column justify-content-center py-4 my-5'>
      <div className='row text-light mx-0'>
        <h1 className='display-3 text-center fw-semibold my-5'>
          Patrocinadores
        </h1>
        <div className='row justify-content-center align-items-center mx-0'>
          <div className='text-center col-12 col-md-10 col-lg-6 mb-5 mb-lg-0'>
            <img src={coop} className='img-fluid' alt='IPN Cuauhtemoc image' />
          </div>
          <div className='my-4 my-lg-0 col-11 col-lg-6'>
            <h2 className='mb-4'>Gracias a nuestros patrocinadores</h2>
            <p className='text-justify'>
              Agradecemos la colaboración con nuestros patrocinadores, cuyo
              apoyo es esencial para desarrollar y entregar los valiosos
              recursos de nuestro equipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorsDs
