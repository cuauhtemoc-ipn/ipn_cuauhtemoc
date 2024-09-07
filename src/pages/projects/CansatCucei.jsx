import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import backgroundImage from '@/assets/background.png'
import projectHeader from '@/assets/CansatCucei/CuceiBanner.png'
import Tabs from '../../components/Projects/Tabs'
import content from '@/assets/CansatCucei/content.json'

const CansatCucei = () => {
  return (
    <div>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <ProjectDetailHeader
        image={projectHeader}
        name='CanSat CUCEI'
        text='Organizado por el Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) de la Universidad de Guadalajara, el concurso CanSat CUCEI es una competencia de diseño, construcción y lanzamiento de pequeños satélites. Los equipos deben desarrollar satélites del tamaño de una lata de refresco que simulan misiones aeroespaciales, incluyendo la captura de datos y telemetría durante el vuelo y el aterrizaje. La competencia replica un programa aeroespacial a pequeña escala, donde los equipos son evaluados en diferentes fases del proyecto, como la planificación, diseño, ejecución y análisis post-lanzamiento​'
        url='http://cansat.cucei.udg.mx/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default CansatCucei
