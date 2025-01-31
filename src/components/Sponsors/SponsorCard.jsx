import info from '@/content/Sponsors.json'
import ContactForm from '@/components/Home/ContactForm'
import Privacy from '../Home/Privacy'
import Pico3 from '@/assets/Pico3.png'

const SponsorCard = () => {
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

  const card = (sponsor, index) => (
    <div
      key={index}
      className='d-flex justify-content-center align-items-center my-5 col-11 col-sm-10 col-md-6 col-lg-4'
    >
      <div className='card mx-auto col-10 col-sm-9 col-lg-10'>
        <div className='border-bottom'>
          <a href={sponsor.page} className='ratio ratio-4x3' target='blank'>
            <img
              src={ImportDrivePhoto(sponsor.imagesecond, 250)}
              className='card-img object-fit-contain p-2'
              alt={sponsor.name}
            />
          </a>
        </div>
        <div className='ratio ratio-4x3'>
          <div className='card-body d-flex flex-column pb-0'>
            <div className='overflow-auto h-75'>
              <h5 className='card-title'>{sponsor.name}</h5>
              <p className='card-text text-justify'>
                {sponsor.description}
              </p>
            </div>
            <div className='d-flex justify-content-center my-auto'>
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
    <div className='container-lg pb-4'>
      <div className='row justify-content-center align-items-center px-0 mx-0'>
        {info.data.map((sponsor, index) => card(sponsor, index))}
      </div>
      <div className='justify-content-center border-bottom border-4 border-primary mx-auto mb-5 col-7 col-sm-5 col-md-8 col-xl-7'>
        <h3 className='text-center text-primary display-5 fw-bold'>
          Conviérte en patrocinador
        </h3>
      </div>
      <div className='row justify-content-center mx-0'>
        <div className='text-light col-12 col-md-6'>
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
          <img className='row d-none d-md-block mx-auto col-10' src={Pico3} />
        </div>
        <ContactForm />
      </div>
      <Privacy />
      <img className='row d-md-none mx-auto mt-4 col-11 col-sm-8' src={Pico3} />
    </div>
  )
}

export default SponsorCard
