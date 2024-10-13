import React from 'react'
import insta from '@/assets/instalogo.png'
import linkedin from '@/assets/linkedinlogo.png'
import face from '@/assets/facebooklogo.svg'
import Pollo from '@/assets/Pollomundo.png'
import { NavLink } from 'react-router-dom'

const Social = () => {
  return (
    <div className='container-lg py-4'>
      <h2 className='display-3 text-light fw-semibold my-5'>
        Conecta con nosotros
      </h2>
      <div className='row text-light justify-content-center align-items-center mx-0'>
        <div className=' col-6'>
          <h3 className='text-light text-justify display-5 fw-semibold m-4'>Conecta con nuestras redes sociales para ver nuestras últimas publicaciones</h3>
          <div className='border-top border-bottom border-5 py-4 mx-4'>
            <div className='row align-items-center py-2 mx-0 col-12'>
              <img src={insta} className='row mx-auto col-2' />
              <p className='lead-lg col-6'>cuauhtemocipn</p>
            </div>
            <div className='row align-items-center py-2 mx-0 col-12'>
              <img src={linkedin} className='row mx-auto col-2' />
              <p className='lead-lg col-6'>Cuauhtemoc IPN Aeroespacial</p>
            </div>
            <div className='row align-items-center py-2 mx-0 col-12'>
              <img src={face} className='row mx-auto col-2' />
              <p className='lead-lg col-6'>Cuauhtemoc IPN Aeroespacial</p>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <img src={Pollo} className='row mx-auto col-9' />
        </div>
      </div>
    </div>
  )
}

export default Social
