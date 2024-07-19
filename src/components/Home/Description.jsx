import React from 'react'
import logo1 from '@/assets/main_logo.svg'
import name from '@/assets/team_name.svg'

const Descrpt = () => {
  return (
    <div className='container-xxl d-flex h-full py-4'>
      <div className='row mx-0 justify-content-center align-items-center'>
        <div className='text-center mx-4 col-12 col-md-6 col-lg-4'>
          <img src={logo1} className='img-fluid' alt='IPN Cuauhtemoc image' />
        </div>
        <div className='text-light col-12 col-md-9 col-lg-4'>
          <h3>Somos</h3>
          <img src={name} className='img-fluid mb-3' alt='IPN Cuauhtemoc' />
          <p>
            Nacimos en 2017 con la pasión de un puñado de estudiantes de ESIME
            Ticoman, compitiendo con satélites CanSats en territorio nacional.{' '}
            <br />
            Hoy, nuestra constelación brilla con más de 30 mentes creativas de
            diversas disciplinas. Hemos llegado a competir a nivel
            internacional, obtenido el Tercer lugar mundial y primer lugar en
            Latinoamérica en CanSat Competition, llevando la bandera de México y
            el orgullo politécnico a lo más alto. <br />
            Somos la prueba de que la innovación y el trabajo en equipo rompen
            barreras. <br />
            ¡Únete a nuestra misión!
          </p>
          <div className='text-center mt-4'>
            <button className='btn btn-outline-light btn-lg px-5'>
              Saber más ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Descrpt
