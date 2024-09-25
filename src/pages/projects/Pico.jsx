import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import backgroundImage from '@/assets/background.png'
import projectHeader from '@/assets/Picosatelites/BannerPico.png'
import Tabs from '../../components/Projects/Tabs'
import content from '@/assets/Picosatelites/content.json'

const Pico = () => {
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
        name='Picosatélites'
        text='La Competencia Nacional de Picosatélites, permite a los estudiantes diseñar y lanzar pequeños satélites llamados CANSAT, simulando misiones espaciales reales. Los equipos deben desarrollar tecnologías que recojan datos de telemetría durante el vuelo y transmitan la información a una estación en tierra. Este evento fomenta el aprendizaje interdisciplinario en áreas como electrónica y aeronáutica, ofreciendo una experiencia completa en el ciclo de vida de un proyecto espacial, desde la planificación hasta el análisis post-lanzamiento, bajo los estándares de UNISEC México.'
        url='https://www.puebla.tecnm.mx/concurso-nacional-pico-satelites-educativos-cansat/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default Pico
