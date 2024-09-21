import info from '@/assets/Sponsors/info.json'
import ContactForm from '@/components/Home/ContactForm'
import Privacy from '../Home/Privacy'

const SponsorCard = () => {
  const card = (sponsor, index) => (
    <div
      key={index}
      className='d-flex justify-content-center align-items-center my-5 col-11 col-sm-10 col-md-6 col-lg-4'
    >
      <div className='card mx-auto col-10 col-sm-9 col-lg-10'>
        <div className='border-bottom'>
          <a href={sponsor.page} className='ratio ratio-4x3' target='blank'>
            <img
              src={sponsor.content.find(item => item.type === 'image').value}
              className='card-img object-fit-contain p-2'
              alt={sponsor.name}
            />
          </a>
        </div>
        <div className='ratio ratio-4x3'>
          <div className='card-body'>
            <div className='overflow-auto h-75'>
              <h5 className='card-title'>{sponsor.name}</h5>
              <p className='card-text text-justify'>
                {sponsor.content.find(item => item.type === 'text').value}
              </p>
            </div>
            <div className='d-flex justify-content-center'>
              <a
                href={sponsor.page}
                className='btn btn-outline-dark btn-md'
                target='blank'
              >
                Ir al sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className='container-lg bg-dark bg-opacity-75 px-0 pb-4'>
      <div className='row justify-content-center align-items-center px-0 mx-0'>
        {info.data.map((sponsor, index) => card(sponsor, index))}
      </div>
      <div className='justify-content-center border-bottom border-4 border-primary mx-auto mb-5 col-7 col-sm-5 col-md-8 col-xl-7'>
        <h3 className='text-center text-primary display-5 fw-bold'>
          Conviérte en patrocinador
        </h3>
      </div>
      <div className='row justify-content-center align-items-center ms-0 me-4'>
        <div className='d-flex text-light px-5 mb-4 mb-lg-0 col-12 col-md-11 col-lg-6'>
          <p className='lead-lg text-justify'>
            ¿Te apasiona la innovación aeroespacial? ¿Buscas una forma de ser
            parte de un futuro emocionante? Nuestro equipo está buscando
            patrocinadores que compartan nuestra visión de impulsar la
            ingeniería aeroespacial. Somos un equipo de estudiantes apasionados
            y talentosos que están listos para revolucionar la industria.
            ¿Quieres saber más? Rellena el formulario para que podamos compartir
            nuestra visión y las oportunidades de patrocinio. ¡Únete a nosotros
            y prepárate para despegar hacia el futuro de la aeroespacial!
          </p>
        </div>
        <ContactForm />
      </div>
      <Privacy />
    </div>
  )
}

export default SponsorCard
