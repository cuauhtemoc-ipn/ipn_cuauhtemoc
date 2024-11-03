import React from 'react'
import insta from '@/assets/instalogo.png'
import linkedin from '@/assets/linkedinlogo.png'
import face from '@/assets/facebooklogo.svg'
import Pollo from '@/assets/Pollomundo.png'

const Social = () => {
  return (
    <div className='container-lg py-4'>
      <h2 className='display-3 text-light fw-semibold my-5'>
        Conecta con nosotros
      </h2>
      <div className='row text-light justify-content-center align-items-center mx-0'>
        <div className='col-12 col-md-6'>
          <p className='lead-lg text-light text-justify fw-semibold'>
            Siempre estamos haciendo algo emocionante, y queremos que seas parte
            de ello. Síguenos en redes sociales para obtener actualizaciones
            exclusivas, consejos y contenido que te inspirará.
          </p>
          <p className='lead-lg text-light text-justify fw-semibold'>
            No te lo pierdas. Mantente al día con nuestras últimas noticias,
            proyectos y contenido exclusivo siguiéndonos en redes sociales.
            ¡Únete hoy y forma parte de nuestro camino!
          </p>
          <div className='border-top border-bottom border-5 py-4'>
            <div className='row justify-content-center align-items-center py-2 mx-0 col-12'>
              <a
                href='https://www.instagram.com/cuauhtemocipn/'
                target='_blank'
                className='col-3'
              >
                <img src={insta} className='row mx-auto col-8 col-sm-5 col-md-7 col-xl-6' />
              </a>
              <p className='lead-lg col-6'>cuauhtemocipn</p>
            </div>
            <div className='row justify-content-center align-items-center py-2 mx-0 col-12'>
              <a
                href='https://www.linkedin.com/company/cuauht%C3%A9moc-ipn-aeroespacial/'
                target='_blank'
                className='col-3'
              >
                <img src={linkedin} className='row mx-auto col-8 col-sm-5 col-md-7 col-xl-6' />
              </a>
              <p className='lead-lg col-6'>Cuauhtemoc IPN Aeroespacial</p>
            </div>
            <div className='row justify-content-center align-items-center py-2 mx-0 col-12'>
              <a
                href='https://www.facebook.com/CuauhtemocIPN'
                target='_blank'
                className='col-3'
              >
                <img src={face} className='row mx-auto col-8 col-sm-5 col-md-7 col-xl-6' />
              </a>
              <p className='lead-lg col-6'>Cuauhtemoc IPN Aeroespacial</p>
            </div>
          </div>
        </div>
        <div className='mt-5 mt-md-0 col-12 col-md-6'>
          <img
            src={Pollo}
            className='row mx-auto col-8 col-md-9 col-lg-10 col-xl-9 col-xxl-7'
          />
        </div>
      </div>
    </div>
  )
}

export default Social
