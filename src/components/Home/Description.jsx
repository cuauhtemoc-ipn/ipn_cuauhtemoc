import React from 'react'
import { NavLink } from 'react-router-dom'
import name from '@/assets/team_name.svg'

const Descrpt = () => {
  const ImportDrivePhoto = (driveUrl, height) => {
    // Default URL in case no valid file ID is found
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    // Try to extract the file ID from the Google Drive URL
    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    // Construct the new URL with the specified height
    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  return (
    <div className='container-xxl d-flex h-full py-4 my-5 my-lg-0 mt-lg-4'>
      <div className='row mx-0 justify-content-center align-items-center'>
        <div className='text-center col-12 col-md-6 col-lg-6 my-5 my-lg-0'>
          <img src={ImportDrivePhoto('https://drive.google.com/file/d/1rjsCzeqpSbOAkL6Xcet3sl2CPNzqOVt3/view?usp=drive_link', 600)} className='img-fluid' alt='IPN Cuauhtemoc image' />
        </div>
        <div className='text-light mt-lg-5 col-12 col-md-9 col-lg-6'>
          <h1 className='hidden-heading'>IPN Cuauhtémoc Aeroespacial</h1>
          <h2 className='display-6 fw-bold'>Somos</h2>
          <img src={name} className='img-fluid mb-4' alt='IPN Cuauhtemoc' />
          <p className='lead-lg text-justify'>
            Una organización de estudiantes del Instituto Politécnico Nacional,
            nacido en 2017 con el fin de fomentar el interés y el desarrollo de
            la industria aeroespacial en México a través de la participación en
            competencias nacionales e internacionales así como en distintas
            actividades de difusión.
          </p>
          <p className='lead-lg text-justify'>
            A lo largo de nuestra historia, hemos obtenido el Tercer lugar
            mundial y primer lugar en Latinoamérica en CanSat Competition,
            llevando la bandera de México y el orgullo politécnico a lo más
            alto. Hoy, nuestro equipo cuenta con más de 30 mentes creativas que
            se desarrollan en diversas disciplinas.
          </p>
          <p className='lead-lg text-justify'>
            Somos la prueba de que la innovación y el trabajo en equipo rompen
            barreras.
          </p>
          <p className='lead-lg'>¡Únete a nuestra misión!</p>
          <div className='text-center mt-4'>
            <NavLink to='/aboutUs'>
              <button className='btn btn-outline-light btn-lg px-5'>
                Saber más ➔
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Descrpt
