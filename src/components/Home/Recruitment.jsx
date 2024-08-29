import React from 'react'
import image from '@/assets/TeamFlag.png'
const Recruitment = () => {
  return (
    <div className='container-lg h-full py-4 align-content-center'>
      <div className='row'>
        <aside className='col-12 col-md-6'>
          <h2 className='display-3 text-light fw-semibold mb-5'>
            ¡Forma parte del equipo!
          </h2>
          <p className='text-light text-justify'>
            Si tienes pasión por la ingeniería aeroespacial y deseas formar
            parte de un equipo dinámico y comprometido con la excelencia, ¡te
            invitamos a participar en nuestro proceso de reclutamiento anual! Al
            unirte a nosotros, tendrás la oportunidad de trabajar en proyectos
            innovadores que desafían los límites de la tecnología aeroespacial.
            Formarás parte de un ambiente colaborativo donde el aprendizaje y el
            crecimiento profesional son continuos.{' '}
          </p>
          <p className='text-light d-none d-xl-block text-justify'>
            No solo buscamos conocimiento técnico, sino también un espíritu de
            equipo y una actitud proactiva. Queremos personas que estén
            dispuestas a aprender, compartir sus ideas y contribuir al éxito
            colectivo. Si te identificas con estos valores y estás listo para
            enfrentar nuevos desafíos, no dudes en postularte.
          </p>
          <p className='text-light lead d-block d-md-none d-lg-block text-justify'>
            Únete a nosotros y forma parte de la próxima generación de líderes
            en ingeniería aeroespacial!
          </p>
          <div className='container-full d-flex justify-content-center d-none d-md-block'>
            <button className='news__button btn btn-outline-light btn-lg px-5 m-3'>
              Ver la ultima convocatoria ➔
            </button>
          </div>
        </aside>
        <img src={image} alt='' className='col-12 col-md-6' />
        <div className='container-full d-flex justify-content-center d-block d-md-none'>
          <button className='news__button btn btn-outline-light btn-lg px-5 m-3 '>
            Ver la ultima convocatoria ➔
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recruitment
