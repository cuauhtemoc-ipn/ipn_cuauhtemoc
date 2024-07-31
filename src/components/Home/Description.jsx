import React from 'react'
import logo1 from '@/assets/main_logo.svg'
import name from '@/assets/team_name.svg'

const Descrpt = () => {
  return (
    <div className='container-xxl d-flex h-full py-4 my-5 my-lg-0 mt-lg-4'>
      <div className='row mx-0 justify-content-center align-items-center'>
        <div className='text-center mx-4 col-12 col-md-6 col-lg-4 my-5 my-lg-0'>
          <img src={logo1} className='img-fluid' alt='IPN Cuauhtemoc image' />
        </div>
        <div className='text-light col-12 col-md-9 col-lg-7'>
          <h3>Somos</h3>
          <img src={name} className='img-fluid mb-4' alt='IPN Cuauhtemoc' />
          <p>
            Una organización de estudiantes del Instituto Politécnico Nacional,
            nacido en 2017 con el fin de fomentar el interés y el desarrollo de
            la industria aeroespacial en México a través de la participación en
            competencias nacionales e internacionales así como en distintas
            actividades de difusión.
          </p>
          <p>
            Nuestra misión principal es participar en la CanSat Competition,
            organizada por AAS en cooperación con la NASA, Lockheed Martin,
            Siemens y Kratos, compitiendo con satélites CanSats a nivel
            internacional. Hoy, nuestro equipo cuenta con más de 30 mentes
            creativas que se desarrollan en diversas disciplinas.
          </p>
          <p>
            A lo largo de nuestra historia, hemos obtenido el Tercer lugar
            mundial y primer lugar en Latinoamérica en CanSat Competition,
            llevando la bandera de México y el orgullo politécnico a lo más
            alto.
          </p>
          <p>
            Somos la prueba de que la innovación y el trabajo en equipo rompen
            barreras.
          </p>
          <p>¡Únete a nuestra misión!</p>
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
