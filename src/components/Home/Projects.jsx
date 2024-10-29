import ProjectCard from './ProjectCard'

const cardcontent = (
  <div className='row col-lg-12 col-xl-12 mt-4 justify-content-around'>
    <ProjectCard
      data={{
        src: 'https://drive.google.com/file/d/1-vZg18ZlcaFv11wr2_GZH3HpzZfq_l_w/view?usp=drive_link',
        title: 'CanSat Competition',
        text: 'La competencia internacional de picosatélites CanSat organizada por la NASA y la American Astronautical Society.',
        href: 'projects/cansat_competition'
      }}
    />
    <ProjectCard
      data={{
        src: 'https://drive.google.com/file/d/1ZfwjY6bNQWaHd9EyVNdHqRxQJ7Co0ONe/view?usp=drive_link',
        title: 'CanSat CUCEI',
        text: 'La competencia de CanSat a nivel nacional organizada por el Centro Universitario de Ciencias Exactas e Ingenierías de Jalisco.',
        href: 'projects/cansat_cucei'
      }}
    />
    <ProjectCard
      data={{
        src: 'https://drive.google.com/file/d/1XUMB8dRHP2rSOvGpvcMjJF-dXNOxvqKw/view?usp=drive_link',
        title: 'Picosatélites',
        text: 'Concurso Nacional de Picosatélites y vehículos Rover Come Back',
        href: 'projects/picosatelites_puebla'
      }}
    />
    <ProjectCard
      data={{
        src: 'https://drive.google.com/file/d/1SqGVeeq90S91V2JK-1aXBRGPFXYg34hj/view?usp=drive_link',
        title: 'ENMICE',
        text: 'El Encuentro Mexicano de Ingeniería en Cohetería Experimental (ENMICE), es el evento y competencia líder de Cohetería Experimental en México.',
        href: 'projects/enmice'
      }}
    />
  </div>
)

const Proyect = () => {
  return (
    <div className='container-lg py-4 h-full'>
      <h2 className='display-3 text-light fw-semibold my-5'>Proyectos</h2>
      <div className='row mx-0 justify-content-around'>
        {cardcontent}
      </div>
    </div>
  )
}

export default Proyect
