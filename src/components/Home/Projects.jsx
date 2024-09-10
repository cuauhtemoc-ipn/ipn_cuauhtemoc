import ProjectCard from './ProjectCard'

const cardcontent = (
  <div className='row col-lg-12 col-xl-12 mt-4 justify-content-around'>
    <ProjectCard
      data={{
        src: 'https://lh3.googleusercontent.com/pw/AP1GczP5AWMXLZj0PEidfSIF-cKfaQeM9-q-g664alVurmMoR4Uh7LcEt5aIMbhPQ-YbVUyc7lWBuz7J-WNz8QNnjQBYSEQabpAZqEZ4PnThFYq-JPExmlUKy-iP0nkBQftd0Bd4cjBRHFV5r_UYrFo5Aer4=w917-h917-s-no-gm?authuser=0',
        title: 'CanSat Competition',
        text: 'La competencia internacional de picosatélites CanSat organizada por la NASA y la American Astronautical Society.',
        href: 'projects/cansat_competition'
      }}
    />
    <ProjectCard
      data={{
        src: 'https://lh3.googleusercontent.com/pw/AP1GczM98EqMoM8wHikVi_73udKEdX9wD9b5mpnu_FB4dnPHMxNLE-ImPqv5gHScNIZjnzSNI1a12qaErJvJd4aUrg9wH8sS3yf0dT-tENYbL5LQRXOXOUS-Az_pudmZ51_ijO79vHFBMgKlnZdk_eTj8bNP=w917-h917-s-no-gm?authuser=0',
        title: 'CanSat CUCEI',
        text: 'La competencia de CanSat a nivel nacional organizada por el Centro Universitario de Ciencias Exactas e Ingenierías de Jalisco.',
        href: 'projects/cansat_cucei'
      }}
    />
    <ProjectCard
      data={{
        src: 'https://lh3.googleusercontent.com/pw/AP1GczPuihq4PL6a8cO2NWdig083zuTnrsA61ZGLAiRsbgN_muuc57BFM3EUL0PG23-INcu3GI-R69qhmAgf_swQKfn4NYhgHmnvMVPU7souaTq3jLY1qJRY3O2D8u-Mvqddip7w-jBcCO-xYnZmbugQcl-s=w862-h863-s-no-gm?authuser=0',
        title: 'Picosatélites Puebla',
        text: 'Concurso Nacional de Picosatélites y vehículos Rover Come Back organizado por el Instituto Tecnológico de Puebla',
        href: 'projects/picosatelites_puebla'
      }}
    />
    <ProjectCard
      data={{
        src: 'https://lh3.googleusercontent.com/pw/AP1GczP505WuPS9SnBOsbzIJCqaVFJmycSdajPw-u1umXVs1KkTpoZ0ft2WthDu9nq5VOAfJsgxaXcgFxMvvG_1AXAROW3fP-dDAz6ouF7UqoGAe6gOV0v9Ko0sXIhTME1veY1GtrtbzZTuTWFoIzo6Htxk4=w917-h917-s-no-gm?authuser=0',
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
